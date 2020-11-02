import React from 'react';
import { initializeApollo } from 'lib/apollo';
import { StyledIndexWrapper } from 'config/styled/MainPageStyle';

import HomePage from './Home';

const Index = () => {
    return (
        <StyledIndexWrapper>
            <HomePage />
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
