const envPlugins =
    process.env.NODE_ENV !== 'test'
        ? [
              '@babel/plugin-transform-runtime',
              [
                  'styled-components',
                  {
                      displayName: true,
                      preprocess: false,
                  },
              ],
              '@babel/plugin-proposal-class-properties',
          ]
        : [];

module.exports = {
    presets: [
        '@babel/preset-typescript',
        '@babel/preset-env',
        '@babel/preset-react',
    ],
    plugins: envPlugins,
};
