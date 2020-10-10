import React from 'react';
import { initializeApollo } from 'lib/apollo';
import UserHeader from 'components/common/UserHeader';

const Index = () => {
    return (
        <div>
            <h1>Index page</h1>
            <UserHeader />
        </div>
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
