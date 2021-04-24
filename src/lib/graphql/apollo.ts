import {
    ApolloClient,
    from,
    fromPromise,
    HttpLink,
    InMemoryCache,
    NormalizedCacheObject,
    split,
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import {
    clearSession,
    getAuthTokens,
    setSession,
} from '../../helpers/authHelper';
import { REFRESH_SESSION } from './mutations/auth';
import { Session } from './types';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const authLink = setContext((_, { headers }) => {
    const { accessToken } = getAuthTokens();
    return {
        headers: {
            ...headers,
            authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
    };
});

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
        for (const err of graphQLErrors) {
            switch (err.extensions?.exception.status) {
                case 401: {
                    const refreshSession = async () => {
                        let session: Session | undefined;
                        const { refreshToken } = getAuthTokens();
                        const result = await apolloClient.mutate({
                            mutation: REFRESH_SESSION,
                            variables: {
                                refreshToken,
                            },
                        });
                        if (result?.data?.refreshSession) {
                            session = result.data.refreshSession;
                            session && setSession(session);
                        } else {
                            clearSession();
                        }
                        return session;
                    };

                    return fromPromise(
                        refreshSession().catch(() => {
                            clearSession();
                            return null;
                        })
                    )
                        .filter((value) => Boolean(value))
                        .flatMap((session) => {
                            const oldHeaders = operation.getContext().headers;

                            operation.setContext({
                                headers: {
                                    ...oldHeaders,
                                    authorization: `Bearer ${session?.accessToken}`,
                                },
                            });
                            return forward(operation);
                        });
                    break;
                }
                case 403: {
                    clearSession();
                }
            }
        }
    }
});

const API_URL =
    process.env.NODE_ENV === 'production'
        ? process.env.REACT_APP_BACKEND_URL
        : 'localhost:8080/graphql';
const httpUrl =
    process.env.NODE_ENV === 'production'
        ? `https://${API_URL}`
        : `http://${API_URL}`;
const wsUrl =
    process.env.NODE_ENV === 'production'
        ? `wss://${API_URL}`
        : `ws://${API_URL}`;

const httpLink = new HttpLink({
    uri: httpUrl,
});

const wsLink = new WebSocketLink({
    uri: wsUrl,
    options: {
        reconnect: true,
    },
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink
);

export function CreateApolloClient() {
    apolloClient = new ApolloClient({
        link: from([errorLink, authLink, splitLink]),
        cache: new InMemoryCache(),
    });

    return apolloClient;
}
