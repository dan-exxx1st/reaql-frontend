module.exports = {
	webpack(config, options) {
		config.module.rules.push({
			test: /\.graphql$/,
			exclude: /node_modules/,
			use: [
				options.defaultLoaders.babel,
				{ loader: 'graphql-let/loader' },
			],
		});

		config.module.rules.push({
			test: /\.graphqls$/,
			exclude: /node_modules/,
			use: ['graphql-tag/loader', 'graphql-let/schema/loader'],
		});

		config.module.rules.push({
			test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
			use: {
				loader: 'url-loader',
				options: {
					limit: 100000,
				},
			},
		});

		return config;
	},
};
