
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	diff = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-diff', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( diff ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided an array', function test() {
		var values = [
				'5',
				5,
				true,
				null,
				undefined,
				NaN,
				{},
				function(){}
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				diff( value );
			};
		}
	});

	it( 'should calculate the differences between adjacent array elements', function test() {
		var data = [ 1, 3, 2, 10, 5 ],
			expected = [ -2, 1, -8, 5 ],
			actual = diff( data );

		assert.deepEqual( actual, expected );
	});

});