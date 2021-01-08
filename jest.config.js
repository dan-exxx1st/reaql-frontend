module.exports = {
    preset: 'ts-jest',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
    transform: {
        '^.+\\.(ts|tsx|js)$': 'babel-jest',
        '^.+\\.svg$': '<rootDir>/config/jest/fileTransform.js',
    },
    restoreMocks: true,
    resetMocks: true,
};
