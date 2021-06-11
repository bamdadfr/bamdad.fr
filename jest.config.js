module.exports = {
    'setupFilesAfterEnv': ['./jest.setup.js'],
    'moduleNameMapper': {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    'testEnvironment': 'jsdom',
}