module.exports = {
  verbose: true,
  preset: 'react-native',
  moduleFileExtensions: ['js', 'ts'],
  rootDir: __dirname,
  testMatch: ['<rootDir>/__tests__/components/*_test.bs.js'],
  testPathIgnorePatterns: [
    'node_modules',
    '<rootDir>/dist',
    '<rootDir>/example/rescript',
    '<rootDir>/example/typescript',
  ],
  coveragePathIgnorePatterns: ['node_modules', '<rootDir>/__tests__'],
  restoreMocks: true,
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|reason-react-native|reason-test-framework|bs-platform|wonka)',
  ],
  transform: {
    '^.+\\.bs.js$': 'babel-jest',
  },
}
