const { basename } = require('path')
const map = base => base === 'index.js' ? 'index.js' : `lib/${base}`

module.exports = test => map(basename(test))
