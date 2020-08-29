module.exports = function () {
    return {
        files: [
            'src/**/*.{ts|tsx}',
            '!src/**/*.spec.{ts|tsx}',
            '!src/**/*.stories.{ts|tsx}',
        ],

        tests: ['src/**/*.spec.{ts|tsx}'],

        env: {
            type: 'node',
        },

        testFramework: 'jest',
        filesWithNoCoverageCalculated: ['src/**/*.stories.{ts|tsx}'],
        hints: {
            ignoreCoverage: ['src/**/*.stories.{ts|tsx}', 'src/lib/*'],
        },
    };
};
