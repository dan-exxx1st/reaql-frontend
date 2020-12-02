import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { initializeApollo } from 'lib/graphql/apollo';

import { checkAuth } from 'helpers/authHelper';

const Index = () => {
    const router = useRouter();
    useEffect(() => {
        const isAuth = checkAuth();
        if (!isAuth) {
            router.push('/signin');
        } else {
            router.push('/home');
        }
    }, []);
    return <div></div>;
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
