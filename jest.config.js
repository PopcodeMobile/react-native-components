module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '<rootDir>/Tests/Setup',
    '@testing-library/jest-native/extend-expect',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/example/node_modules',
    '<rootDir>/lib/',
  ],
};
