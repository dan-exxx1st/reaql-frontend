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
    const client = new ApolloClient({
        link: from([authLink, splitLink]),
        cache: new InMemoryCache(),
    });

    return client;
}
