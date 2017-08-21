"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "wichevr",
			"path": "wichevr/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/wichevr.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"wichevr": "wichevr"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const wichevr = require( "./wichevr.js" );
//: @end-server





//: @server:
describe( "wichevr", ( ) => {

	describe( "`wichevr( '', false, true )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( wichevr( "", false, true ), true );

		} );
	} );

	describe( "`wichevr( 1, 'hello', true )`", ( ) => {
		it( "should be equal to 1", ( ) => {

			assert.equal( wichevr( 1, "hello", true ), 1 );

		} );
	} );

	describe( "`wichevr( false, [ ], [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to [ 1, 2, 3 ]", ( ) => {

			assert.deepEqual( wichevr( false, [ ], [ 1, 2, 3 ] ), [ 1, 2, 3 ] );

		} );
	} );

	describe( "`wichevr( false, Symbol.for( 'id' ), function hello( ){ } )`", ( ) => {
		it( "should be equal to function hello( ){ }", ( ) => {

			let test = function hello( ){ };
			assert.deepEqual( wichevr( false, Symbol.for( "id" ), test ), test );

		} );
	} );

	describe( "`wichevr( null, Symbol.for( 'hello' ) )`", ( ) => {
		it( "should be equal to Symbol.for( 'hello' )", ( ) => {

			assert.equal( wichevr( null, Symbol.for( "hello" ) ), Symbol.for( "hello" ) );

		} );
	} );

	describe( "`wichevr( { }, Symbol.for( 'cloaked' ), true )`", ( ) => {
		it( "should be equal to empty object", ( ) => {

			assert.deepEqual( wichevr( { }, Symbol.for( "cloaked" ), true ), { } );

		} );
	} );

	describe( "`wichevr( function hello( ){ }, 'hello', true )`", ( ) => {
		it( "should be equal to function hello( ){ }", ( ) => {

			let test2 = function hello( ){ };
			assert.deepEqual( wichevr( test2, "hello", true ), test2 );

		} );
	} );

	describe( "`wichevr( '', false, 'hello' )`", ( ) => {
		it( "should be equal to 'hello'", ( ) => {

			assert.equal( wichevr( "", false, "hello" ), "hello");

		} );
	} );

	describe( "`wichevr( '', false, { 0: 'hello' } )`", ( ) => {
		it( "should be equal to { 0: 'hello' }", ( ) => {

			assert.deepEqual( wichevr( "", false, { 0: "hello" } ), { 0: "hello" } );

		} );
	} );

	describe( "`wichevr( function hello( ){ return 'hello' }, function procedure( ){ throw new Error( 'no operation' ) } )`", ( ) => {
		it( "should be equal to function hello( ){ return 'hello' }", ( ) => {

			let test4 = function hello( ){ return "hello" };
			assert.deepEqual(
				wichevr( test4,
					function procedure( ){ throw new Error( "no operation" ) } ),
					test4 );

		} );
	} );

	describe( "`wichevr( false, function hello( ){ return 'hello' }, true )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( wichevr( false, function hello( ){ return "hello" }, true ), true );

		} );
	} );

	describe( "`wichevr( '', 'yeah', { } )`", ( ) => {
		it( "should be equal to 'yeah'" , ( ) => {

			assert.equal( wichevr( "", "yeah", { } ), "yeah" );

		} );
	} );

} );
//: @end-server






