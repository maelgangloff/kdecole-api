module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  moduleFileExtensions: [
    'ts',
    'js'
  ],
  testMatch: [
    '**/tests/**/*.test.ts'
  ],
  testEnvironment: 'node',
  moduleNameMapper: {
    '^axios$': require.resolve('axios'),
  },
}
