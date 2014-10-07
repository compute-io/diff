diff
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the differences between adjacent elements in an array of values.


## Installation

``` bash
$ npm install compute-diff
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var diff = require( 'compute-diff' );
```

#### diff( arr )

Computes the differences between adjacent array values.

``` javascript
var data = [ 1, 3, 2, 10, 5 ];

var vals = diff( data );
// returns [ -2, 1, -8, 5 ]
```

Note: the returned `array` will have a length which is one less than the original `array`; i.e., if `arr.length = 10`, then `diff( arr ).length = 9`.


## Examples

``` javascript
var diff = require( 'compute-diff' );

var data = new Array( 100 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random() * 100 );
}

console.log( diff( data ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-diff.svg
[npm-url]: https://npmjs.org/package/compute-diff

[travis-image]: http://img.shields.io/travis/compute-io/diff/master.svg
[travis-url]: https://travis-ci.org/compute-io/diff

[coveralls-image]: https://img.shields.io/coveralls/compute-io/diff/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/diff?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/diff.svg
[dependencies-url]: https://david-dm.org/compute-io/diff

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/diff.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/diff

[github-issues-image]: http://img.shields.io/github/issues/compute-io/diff.svg
[github-issues-url]: https://github.com/compute-io/diff/issues