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

const assert = require( "assert" );

//: @server:
const wichevr = require( "./wichevr.js" );
//: @end-server

//: @client:
const wichevr = require( "./wichevr.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:
describe( "wichevr", ( ) => {

	describe( `"wichevr( "", false, true )"`, ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( wichevr( "", false, true ), true );

		} );
	} );

	describe( `"wichevr( false, [ ], [ 1, 2, 3 ] )"`, ( ) => {
	it( "should be equal to 1", ( ) => {

			assert.equal( wichevr( 1, "hello", true ), 1 );

		} );
	} );

	describe( "wichevr( false, [ ], [ 1, 2, 3 ] )", ( ) => {
	it( "should be deeply equal", ( ) => {

			assert.deepEqual( wichevr( false, [ ], [ 1, 2, 3 ] ), [ 1, 2, 3 ] );

		} );
	} );

	describe( `"wichevr( false, Symbol.for( "id" ), test )"`, ( ) => {
	it( "should be equal to value of test variable", ( ) => {

			let test = function hello( ){ };
			assert.deepEqual( wichevr( false, Symbol.for( "id" ), test ), test);

		} );
	} );

	describe( `"wichevr( null, Symbol.for( "hello" ) )"`, ( ) => {
	it( "should be deeply equal", ( ) => {

			assert.equal( wichevr( null, Symbol.for( "hello" ) ), Symbol.for( "hello" ) );

		} );
	} );

	describe( `"wichevr( { }, Symbol.for( "cloaked" ), true )"`, ( ) => {
	it( "should be equal to empty object", ( ) => {

			assert.deepEqual( wichevr( { }, Symbol.for( "cloaked" ), true ), { } );

		} );
	} );

	describe( `"wichevr( test2, "hello", true )"`, ( ) => {
	it( "should be equal to value of test variable", ( ) => {

			let test2 = function hello( ){ };
			assert.deepEqual( wichevr( test2, "hello", true ), test2 );

		} );
	} );

	describe( `"wichevr( "", false, "hello" )"`, ( ) => {
	it( "should be equal to 'hello'", ( ) => {

			assert.equal( wichevr( "", false, "hello" ), "hello");

		} );
	} );

	describe( `"wichevr( "", false, arguments )"`, ( ) => {
	it( "should be equal to arguments", ( ) => {

			assert.deepEqual( wichevr( "", false, arguments ), arguments );

		} );
	} );

	describe( `"wichevr( test4,function procedure( ){ throw new Error( "no operation" ) } )"`, ( ) => {
	it( "should be deeply equal", ( ) => {

			let test4 = function hello( ){ return "hello" };
					assert.deepEqual( wichevr( test4,
					function procedure( ){ throw new Error( "no operation" ) } ),
					test4 );

		} );
	} );

	describe( `"wichevr( false, function hello( ){ return "hello" }, true )"`, ( ) => {
	it( "should be equal to true", ( ) => {

			assert.equal( wichevr( false, function hello( ){ return "hello" }, true ), true );

		} );
	} );

	describe( `"wichevr( "", "yeah", { } )"`, ( ) => {
	it( "should have value 'yeah'" , ( ) => {

			assert.equal( wichevr( "", "yeah", { } ), "yeah" );

		} );
	} );

} );


//: @end-server


//: @client:

describe( "wichevr", ( ) => {

	describe( `"wichevr( "", false, true )"`, ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( wichevr( "", false, true ), true );

		} );
	} );

	describe( `"wichevr( false, [ ], [ 1, 2, 3 ] )"`, ( ) => {
	it( "should be equal to 1", ( ) => {

			assert.equal( wichevr( 1, "hello", true ), 1 );

		} );
	} );

	describe( "wichevr( false, [ ], [ 1, 2, 3 ] )", ( ) => {
	it( "should be deeply equal", ( ) => {

			assert.deepEqual( wichevr( false, [ ], [ 1, 2, 3 ] ), [ 1, 2, 3 ] );

		} );
	} );

	describe( `"wichevr( false, Symbol.for( "id" ), test )"`, ( ) => {
	it( "should be equal to value of test variable", ( ) => {

			let test = function hello( ){ };
			assert.deepEqual( wichevr( false, Symbol.for( "id" ), test ), test);

		} );
	} );

	describe( `"wichevr( null, Symbol.for( "hello" ) )"`, ( ) => {
	it( "should be deeply equal", ( ) => {

			assert.equal( wichevr( null, Symbol.for( "hello" ) ), Symbol.for( "hello" ) );

		} );
	} );

	describe( `"wichevr( { }, Symbol.for( "cloaked" ), true )"`, ( ) => {
	it( "should be equal to empty object", ( ) => {

			assert.deepEqual( wichevr( { }, Symbol.for( "cloaked" ), true ), { } );

		} );
	} );

	describe( `"wichevr( test2, "hello", true )"`, ( ) => {
	it( "should be equal to value of test variable", ( ) => {

			let test2 = function hello( ){ };
			assert.deepEqual( wichevr( test2, "hello", true ), test2 );

		} );
	} );

	describe( `"wichevr( "", false, "hello" )"`, ( ) => {
	it( "should be equal to 'hello'", ( ) => {

			assert.equal( wichevr( "", false, "hello" ), "hello");

		} );
	} );

	describe( `"wichevr( "", false, arguments )"`, ( ) => {
	it( "should be equal to arguments", ( ) => {

			assert.deepEqual( wichevr( "", false, arguments ), arguments );

		} );
	} );

	describe( `"wichevr( test4,function procedure( ){ throw new Error( "no operation" ) } )"`, ( ) => {
	it( "should be deeply equal", ( ) => {

			let test4 = function hello( ){ return "hello" };
					assert.deepEqual( wichevr( test4,
					function procedure( ){ throw new Error( "no operation" ) } ),
					test4 );

		} );
	} );

	describe( `"wichevr( false, function hello( ){ return "hello" }, true )"`, ( ) => {
	it( "should be equal to true", ( ) => {

			assert.equal( wichevr( false, function hello( ){ return "hello" }, true ), true );

		} );
	} );

	describe( `"wichevr( "", "yeah", { } )"`, ( ) => {
	it( "should have value 'yeah'" , ( ) => {

			assert.equal( wichevr( "", "yeah", { } ), "yeah" );

		} );
	} );

} );

//: @end-client

//: @bridge:

describe( "wichevr", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( `"<test>"`, ( ) => {
		it( "<message>", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return <test>;
				}

			).value;

			assert.equal( result, <expected> );

		} );
	} );
	/*

	describe( `"<test>"`, ( ) => {
		it( "<message>", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return <test>;
				}

			).value;

			assert.equal( result, <expected> );

		} );
	} );

	*/
} );
//: @end-bridge
