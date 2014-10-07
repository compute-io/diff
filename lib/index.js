/**
*
*	COMPUTE: diff
*
*
*	DESCRIPTION:
*		- Computes the differences between adjacent elements in an array of values.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// DIFF /

	/**
	* FUNCTION: diff( arr )
	*	Calculates the differences between adjacent elements in an array.
	*
	* @param {Array} arr - array of numerical values
	* @returns {Array} array of differences
	*/
	function diff( arr ) {
		if ( !Array.isArray( arr ) ) {
			throw new TypeError( 'diff()::invalid input argument. Must provide an array.' );
		}
		var len = arr.length,
			d = new Array( len-1 );

		for ( var i = 0; i < len-1; i++ ) {
			d[ i ] = arr[ i ] - arr[ i+1 ];
		}
		return d;
	} // end FUNCTION diff()


	// EXPORTS //

	module.exports = diff;

})();