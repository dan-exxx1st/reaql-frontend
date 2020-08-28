const plugins =
	process.env.NODE_ENV !== 'test'
		? [
				'@babel/plugin-transform-runtime',
				[
					'styled-components',
					{
						ssr: true,
						displayName: true,
						preprocess: false,
					},
				],
		  ]
		: [];

module.exports = {
	presets: [
		'@babel/preset-typescript',
		'@babel/preset-env',
		'@babel/preset-react',
	],
	plugins,
};
