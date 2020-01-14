
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./material-ui-advanced-table.cjs.production.min.js')
} else {
  module.exports = require('./material-ui-advanced-table.cjs.development.js')
}
