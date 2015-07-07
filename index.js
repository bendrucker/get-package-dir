'use strict'

var ap = require('ap')
var extend = require('xtend')
var dezalgo = require('dezalgo')
var isPackage = require('is-package')
var path = require('path')
var tempfile = require('tempfile')
var fs = require('fs')
var install = require('spawn-npm-install')

var applyDefaults = ap.partial(extend, {
  version: '',
  cwd: process.cwd()
})

module.exports = function getPackageDir (name, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  options = applyDefaults(options)
  callback = dezalgo(callback)

  if (!isPackage(name)) return callback(null, path.resolve(options.cwd, name))

  var tmpDir = tempfile()
  fs.mkdir(tmpDir, function (err) {
    if (err) return callback(err)
    var id = name + '@' + options.version
    install(id, {cwd: tmpDir}, function (err) {
      if (err) return callback(err)
      callback(null, path.resolve(tmpDir, 'node_modules/xtend'))
    })
  })
}
