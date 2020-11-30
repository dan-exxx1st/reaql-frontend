import React from 'react';
import { initializeApollo } from 'lib/apollo';
import { StyledIndexWrapper } from 'config/styled/MainPageStyle';

import SignUpPage from './SignUp';

const Index = () => {
    return (
        <StyledIndexWrapper>
            <SignUpPage />
        </StyledIndexWrapper>
    );
};

export async function getStaticProps() {
    const apolloClient = initializeApollo();

    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
    };
}

export default Index;
