import { IncomingMessage, ServerResponse } from 'http';
import { useMemo } from 'react';
import { ApolloClient } from 'apollo-client';
import { setContext } from '@apollo/client/link/context';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { getAuthTokens } from 'helpers/authHelper';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

export type ResolverContext = {
    req?: IncomingMessage;
    res?: ServerResponse;
};

function createIsomorphLink(context: ResolverContext = {}) {
    if (typeof window === 'undefined') {
        const { SchemaLink } = require('apollo-link-schema');
        const schema = require('./types');
        return new SchemaLink({ schema, context });
    } else {
        const { HttpLink } = require('apollo-link-http');
        const httpLink = new HttpLink({
            uri: 'http://localhost:8080/graphql',
            credentials: 'same-origin',
        });
        const link = authLink.concat(httpLink);
        return link;
    }
}

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

function createApolloClient(context?: ResolverContext) {
    const link = createIsomorphLink(context);
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link,
        cache: new InMemoryCache(),
    });
}

export function initializeApollo(
    initialState: any = null,
    context?: ResolverContext
) {
    const _apolloClient = apolloClient ?? createApolloClient(context);

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // get hydrated here
    if (initialState) {
        _apolloClient.cache.restore(initialState);
    }
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return _apolloClient;
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;

    return _apolloClient;
}

export function useApollo(initialState: any) {
    const store = useMemo(() => initializeApollo(initialState), [initialState]);
    return store;
}
