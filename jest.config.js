module.exports = {
    'setupFilesAfterEnv': ['./jest.setup.js'],
    'testRegex': '(test|spec)\\.[jt]sx?$',
    'moduleNameMapper': {
        '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '@fontsource/lora': '<rootDir>/__mocks__/fontsource-lora.js',
        'next/head': '<rootDir>/__mocks__/next-head.js',
    },
    'testEnvironment': 'jsdom',
    'modulePathIgnorePatterns': [
        '<rootDir>/.next/',
    ],
    // 'collectCoverage': true,
    'coverageDirectory': './coverage/',
    'collectCoverageFrom': [
        '<rootDir>/src/**/*.js',
    ],
}