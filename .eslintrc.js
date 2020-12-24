module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    rules: {
        indent: 0,
        'linebreak-style': ['error', 'unix'],
        semi: ['error', 'always'],
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-empty-function': 0,
        'react/prop-types': 0,
        '@typescript-eslint/triple-slash-reference': 'off',
        'react/display-name': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
