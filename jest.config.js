module.exports = {
  verbose: true,
  bail: true,
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testRegex: './src/.+\\.test\\.ts$',
  moduleFileExtensions: ['ts', 'js'],
  collectCoverage: true,
  rootDir: __dirname,
}
