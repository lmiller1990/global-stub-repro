require('jsdom-global')()

const VueTestUtils = require('@vue/test-utils')

// should this work?
VueTestUtils.config.stubs['Test'] = '<div>A</div>'

module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ]
}
