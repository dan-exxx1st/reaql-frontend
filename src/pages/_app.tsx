import React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo';
import Themes from 'config/styled';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
    const apolloClient: any = useApollo(pageProps.initialApolloState);

    return (
        <ApolloProvider client={apolloClient}>
            <ThemeProvider theme={Themes}>
                <Component {...pageProps} />
            </ThemeProvider>
        </ApolloProvider>
    );
}
