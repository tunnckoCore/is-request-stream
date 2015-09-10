/*!
 * is-request-stream <https://github.com/tunnckoCore/is-request-stream>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isStream = require('is-node-stream')

module.exports = function isRequestStream (stream) {
  if (!isStream(stream)) {
    return false
  }
  if (stream.setHeader && typeof stream.abort === 'function') {
    return true
  }
  return false
}
