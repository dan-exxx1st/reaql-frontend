import {
    ApolloClient,
    ApolloLink,
    from,
    fromPromise,
    HttpLink,
    InMemoryCache,
    split,
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

import { onError } from 'apollo-link-error';
import { setContext } from '@apollo/client/link/context';

import {
    clearSession,
    getAuthTokens,
    setSession,
} from '../../helpers/authHelper';

import { REFRESH_SESSION } from './mutations/auth';
import { Mutation } from './types';

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const { accessToken } = getAuthTokens();
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
    };
});

const httpLink = new HttpLink({
    uri: 'http://localhost:8080/graphql',
});

const wsLink = new WebSocketLink({
    uri: `ws://localhost:8080/graphql`,
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
    const getNewToken = () => {
        const apolloClient = client;
        const { refreshToken } = getAuthTokens();
        return apolloClient
            .query<Mutation>({
                query: REFRESH_SESSION,
                variables: { refreshToken },
            })
            .then((response) => {
                const session = response.data.refreshSession;
                setSession(session);
                return session;
            });
    };

    const errorLink = onError(({ graphQLErrors, operation, forward }): any => {
        if (graphQLErrors) {
            for (const err of graphQLErrors) {
                switch (err.extensions?.code) {
                    case 'UNAUTHENTICATED':
                        return fromPromise(
                            getNewToken().catch(() => {
                                clearSession();
                                return;
                            })
                        )
                            .filter((value) => Boolean(value))
                            .flatMap(function (session): any {
                                if (session) {
                                    const { accessToken } = session;
                                    const oldHeaders = operation.getContext()
                                        .headers;
                                    // modify the operation context with a new token
                                    operation.setContext({
                                        headers: {
                                            ...oldHeaders,
                                            authorization: `Bearer ${accessToken}`,
                                        },
                                    });

                                    // retry the request, returning the new observable
                                    return forward(operation);
                                }
                            });
                }
            }
        }
    });
    const client = new ApolloClient({
        link: from([(errorLink as unknown) as ApolloLink, authLink, splitLink]),
        cache: new InMemoryCache(),
    });

    return client;
}
