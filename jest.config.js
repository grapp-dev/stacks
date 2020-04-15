module.exports = {
  verbose: true,
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  rootDir: __dirname,
  testMatch: ['<rootDir>/__tests__/?(*.)(spec|test).(ts|tsx)'],
  modulePaths: ['<rootDir>/src'],
  moduleDirectories: ['<rootDir>/node_modules'],
  testPathIgnorePatterns: ['node_modules', '<rootDir>/dist', '<rootDir>/example'],
  restoreMocks: true,
  transform: {
    '^.+\\.[t|j]sx?$': ['babel-jest'],
  },
}
