import React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import { useApollo } from '../lib/graphql/apollo';
import Themes from 'helpers/styled';
import { StyledIndexWrapper } from 'helpers/styled/MainPageStyle';
import { checkAuth } from 'helpers/authHelper';
import AuthContext from 'helpers/contexts/authContext';

export default function App({ Component, pageProps }: AppProps) {
    const apolloClient: any = useApollo(pageProps.initialApolloState);

    return (
        <ApolloProvider client={apolloClient}>
            <ThemeProvider theme={Themes}>
                <StyledIndexWrapper>
                    <AuthContext.Provider value={checkAuth()}>
                        <Component {...pageProps} />
                    </AuthContext.Provider>
                </StyledIndexWrapper>
            </ThemeProvider>
        </ApolloProvider>
    );
}
