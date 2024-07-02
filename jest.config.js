module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testRegex: '(test|spec)\\.[jt]sx?$',
  moduleNameMapper: {
    '@fontsource/lora': '<rootDir>/__mocks__/fontsource-lora.js',
    'next/head': '<rootDir>/__mocks__/next-head.js',
    'next/router': '<rootDir>/__mocks__/next-router.js',
    'src/(.*)': '<rootDir>/src/$1',
    '__mocks__/(.*)': '<rootDir>/__mocks__/$1',
  },
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['<rootDir>/.next/'],
  // collectCoverage: true,
  coverageDirectory: './coverage/',
  collectCoverageFrom: ['<rootDir>/src/**/*.js'],
};
