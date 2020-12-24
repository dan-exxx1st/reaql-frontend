import React, { Suspense } from 'react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import { CreateApolloClient } from 'lib/graphql/apollo';

import {
    UserContextProvider,
    useUserReducer,
} from 'helpers/contexts/userContext';
import { StyledIndexWrapper } from 'helpers/styled/MainPageStyle';
import Theme from 'helpers/styled';

import Router from 'pages/Router';

const App = () => {
    const apolloClient = CreateApolloClient();

    const userReducer = useUserReducer();

    return (
        <ApolloProvider client={apolloClient}>
            <ThemeProvider theme={Theme}>
                <StyledIndexWrapper>
                    <UserContextProvider value={userReducer}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Router />
                        </Suspense>
                    </UserContextProvider>
                </StyledIndexWrapper>
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default App;
