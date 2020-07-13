module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    // '**/*.{vue,js,jsx}',
    '**/src/basic-comps/*.{vue,js,jsx}',
    '**/src/components/*.{vue,js,jsx}',
    '**/src/utils/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/dist/**'
  ]
}
