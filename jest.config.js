module.exports = {
  verbose: true,
  preset: 'react-native',
  rootDir: __dirname,
  testRegex: './__tests__/.+\\.test\\.tsx$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['node_modules', '<rootDir>/example'],
  coveragePathIgnorePatterns: ['node_modules', '<rootDir>/__tests__'],
  restoreMocks: true,
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|reason-react-native|rescript|wonka)',
  ],
  transform: {
    '^.+\\.[t|j]sx?$': ['babel-jest'],
  },
}
