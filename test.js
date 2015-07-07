'use strict'

var test = require('tape')
var path = require('path')
var getPackage = require('get-package')
var getPackageDir = require('./')

var cwd = process.cwd()

test('local', function (t) {
  t.plan(1)
  getPackageDir('./foo/bar', function (err, dir) {
    if (err) return t.end(err)
    t.equal(dir, path.resolve(cwd, 'foo/bar'))
  })
})

test('npm', function (t) {
  t.plan(2)
  getPackageDir('xtend', function (err, dir) {
    if (err) return t.end(err)
    t.ok(/xtend$/.test(dir))
    getPackage('.', {cwd: dir}, function (err, json) {
      if (err) return t.end(err)
      t.equal(json.name, 'xtend')
    })
  })
})
