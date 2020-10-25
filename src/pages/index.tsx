import React from 'react';
import { initializeApollo } from 'lib/apollo';

import HomePage from './Home';
import { Wrapper } from 'components/UI';

const Index = () => {
    return (
        <Wrapper>
            <HomePage />
        </Wrapper>
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
