const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/preset-create-react-app',
    ],
    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
                noEmit: false,
            },
        },
    },
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
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
