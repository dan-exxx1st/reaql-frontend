const path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.tsx'],
	addons: ['@storybook/addon-actions', '@storybook/addon-links'],
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
					loader: require.resolve('ts-loader'),
				},
				// Optional
				{
					loader: require.resolve('react-docgen-typescript-loader'),
				},
			],
			exclude: [
				'/**/*.spec.ts',
				'/**/*.spec.tsx',
				'/node_modules/',
				'/dist/',
			],
		});
		config.resolve.extensions.push('.ts', '.tsx');
		config.resolve.modules = [
			...(config.resolve.modules || []),
			path.resolve(__dirname, '../src'),
		];
		return config;
	},
};
