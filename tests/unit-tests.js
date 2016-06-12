const testsContext = require.context('../src', true, /\.spec\.js$/)
const moduleContext = require.context('../src', true, /^(.(?!\.spec))*\.js$/)

testsContext.keys().forEach(testsContext)
moduleContext.keys().forEach(moduleContext)
