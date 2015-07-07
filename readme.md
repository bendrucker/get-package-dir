# get-package-dir [![Build Status](https://travis-ci.org/bendrucker/get-package-dir.svg?branch=master)](https://travis-ci.org/bendrucker/get-package-dir)

> Get or create a npm package directory with installed dependencies


## Install

```
$ npm install --save get-package-dir
```


## Usage

get-package-dir will pass through local paths. For npm package names, it will download the package into a temporary directory and install dependencies.

```js
var getPackageDir = require('get-package-dir')

getPackageDir('./foo/bar')
//=> /absolute/path/to/foo/bar

getPackageDir('xtend')
//=> /absolute/path/to/installed/xtend
```

## API

#### `getPackageDir(name, [options], callback)` -> `undefined`

##### name

*Required*  
Type: `string`

A package name or a path to a local package.

##### options

###### version

Type: `string`  
Default: `''`

The package version to request (only applies to npm downloads).

###### cwd

Type: `string`  
Default: `process.cwd()`

The working directory from which to resolve paths.

##### callback

*Required*  
Type: `function`  
Arguments: `err, directory`

A callback that receives an absolute path to the package's directory.


## License

MIT © [Ben Drucker](http://bendrucker.me)
