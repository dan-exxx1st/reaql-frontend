import React, { Suspense } from 'react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import { checkAuth } from 'helpers/authHelper';
import AuthContext from 'helpers/contexts/authContext';
import { StyledIndexWrapper } from 'helpers/styled/MainPageStyle';
import { CreateApolloClient } from 'lib/graphql/apollo';
import Theme from 'helpers/styled';

import Router from 'pages/Router';

const App = () => {
    const apolloClient = CreateApolloClient();
    return (
        <ApolloProvider client={apolloClient}>
            <ThemeProvider theme={Theme}>
                <StyledIndexWrapper>
                    <AuthContext.Provider value={checkAuth()}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Router />
                        </Suspense>
                    </AuthContext.Provider>
                </StyledIndexWrapper>
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default App;
