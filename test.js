/*!
 * is-request-stream <https://github.com/tunnckoCore/is-request-stream>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var fs = require('fs')
var net = require('net')
var http = require('http')
var test = require('assertit')
var stream = require('stream')
var tmpFile = require('tmp-file')
var tmpFilepath = require('tmp-filepath')
var isRequestStream = require('./index')

test('is-request-stream:', function () {
  test('should return false for readable streams', function (done) {
    test.equal(isRequestStream(new stream.Readable()), false)
    test.equal(isRequestStream(fs.createReadStream('./test.js')), false)
    done()
  })
  test('should return false for writable streams', function (done) {
    test.equal(isRequestStream(new stream.Writable()), false)
    test.equal(isRequestStream(fs.createWriteStream(tmpFilepath('.js'))), false)
    done()
  })
  test('should return false for stream.Stream', function (done) {
    test.equal(isRequestStream(new stream.Stream()), false)
    done()
  })
  test('should return false for stream.Duplex', function (done) {
    test.equal(isRequestStream(new stream.Duplex()), false)
    done()
  })
  test('should return false for stream.Transform', function (done) {
    test.equal(isRequestStream(new stream.Transform()), false)
    test.equal(isRequestStream(tmpFile.stream()), false)
    done()
  })
  test('should return false for stream.PassThrough', function (done) {
    test.equal(isRequestStream(new stream.PassThrough()), false)
    done()
  })
  test('should return false for net.Socket', function (done) {
    test.equal(isRequestStream(new net.Socket()), false)
    done()
  })
  test('should return false for non-streams', function (done) {
    test.equal(isRequestStream(''), false)
    test.equal(isRequestStream({}), false)
    test.equal(isRequestStream(1234), false)
    test.equal(isRequestStream(null), false)
    test.equal(isRequestStream([1, 2, 3]), false)
    test.equal(isRequestStream(undefined), false)
    done()
  })
  test('should return true for request stream from http.get()', function (done) {
    var req = http.get('http://requestb.in/p21o4xp2')
    test.equal(isRequestStream(req), true)
    done()
  })
})
