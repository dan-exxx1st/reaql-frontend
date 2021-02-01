import {
    ApolloClient,
    from,
    HttpLink,
    InMemoryCache,
    split,
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';

import { getAuthTokens } from '../../helpers/authHelper';

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
    const client = new ApolloClient({
        link: from([authLink, splitLink]),
        cache: new InMemoryCache(),
    });

    return client;
}
