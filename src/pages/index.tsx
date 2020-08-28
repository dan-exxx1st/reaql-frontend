import React from 'react';
import { initializeApollo } from 'lib/apollo';
import { Typography, Avatar } from 'components/UI';

const Index = () => {
	return (
		<div>
			<h1>Index page</h1>
			<Typography variant="h1">Typography text</Typography>
			<Avatar />
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
