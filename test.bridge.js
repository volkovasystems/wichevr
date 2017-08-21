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

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge







//: @bridge:

describe("wichevr", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`wichevr( '', false, true )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return wichevr("", false, true);
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`wichevr( 1, 'hello', true )`", function () {
		it("should be equal to 1", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return wichevr(1, "hello", true);
			}).

			value;

			assert.equal(result, 1);

		});
	});

	describe("`wichevr( false, [ ], [ 1, 2, 3 ] )`", function () {
		it("should be equal to [ 1, 2, 3 ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( wichevr( false, [ ], [ 1, 2, 3 ] ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), [1, 2, 3]);

		});
	});

	describe("`wichevr( false, Symbol.for( 'id' ), function hello( ){ } )`", function () {
		it("should be equal to function hello( ){ }", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let test = function hello( ){ };
   					return wichevr( false, Symbol.for( "id" ), test ).toString( );
   
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, "function hello( ){ }");

		});
	});

	describe("`wichevr( null, Symbol.for( 'hello' ) )`", function () {
		it("should be equal to Symbol.for( 'hello' )", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return wichevr( null, Symbol.for( "hello" ) ).toString( );
   				}
   
   			).value;
   
   			assert.equal( result, Symbol.for( "hello" ).toString( ) );
   			//: @end-ignore

		});
	});

	describe("`wichevr( { }, Symbol.for( 'cloaked' ), true )`", function () {
		it("should be equal to empty object", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return wichevr( { }, Symbol.for( "cloaked" ), true );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(result, {});

		});
	});

	describe("`wichevr( function hello( ){ }, 'hello', true )`", function () {
		it("should be equal to function hello( ){ }", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let test2 = function hello( ){ };
   					return wichevr( test2, "hello", true ).toString( );
   
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, "function hello( ){ }");

		});
	});

	describe("`wichevr( '', false, 'hello' )`", function () {
		it("should be equal to 'hello'", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return wichevr("", false, "hello");
			}).

			value;

			assert.equal(result, "hello");

		});
	});

	describe("`wichevr( '', false, { 0: 'hello' } )`", function () {
		it("should be equal to { 0: 'hello' }", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( wichevr( "", false, { 0: "hello" } ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), { 0: "hello" });

		});
	});

	describe("`wichevr( function hello( ){ return 'hello' }, function procedure( ){ throw new Error( 'no operation' ) } )`", function () {
		it("should be equal to function hello( ){ return 'hello' }", function () {

			var result = browser.url(bridgeURL).execute(

			function () {

				var test4 = function hello() {return "hello";};

				return wichevr(test4,
				function procedure() {throw new Error("no operation");}).toString();

			}).

			value;

			assert.deepEqual(result, function hello() {return "hello";}.toString());

		});
	});

	describe("`wichevr( false, function hello( ){ return 'hello' }, true )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return wichevr(false, function hello() {return "hello";}, true);
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`wichevr( '', 'yeah', { } )`", function () {
		it("should be equal to 'yeah'", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return wichevr("", "yeah", {});
			}).

			value;

			assert.equal(result, "yeah");

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsIndpY2hldnIiLCJ2YWx1ZSIsImVxdWFsIiwiZGVlcEVxdWFsIiwiSlNPTiIsInBhcnNlIiwidGVzdDQiLCJoZWxsbyIsInByb2NlZHVyZSIsIkVycm9yIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7Ozs7QUFNQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUFFLFNBQVUsU0FBVixFQUFxQixZQUFPOztBQUUzQixLQUFJQyx3QkFBdUJGLEtBQUtHLE9BQUwsQ0FBY0MsU0FBZCxFQUF5QixhQUF6QixDQUEzQjs7QUFFQUgsVUFBVSw4QkFBVixFQUEwQyxZQUFPO0FBQ2hESSxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosZUFBVztBQUNWLFdBQU9DLFFBQVMsRUFBVCxFQUFhLEtBQWIsRUFBb0IsSUFBcEIsQ0FBUDtBQUNBLElBSlc7O0FBTVhDLFFBTkY7O0FBUUFiLFVBQU9jLEtBQVAsQ0FBY04sTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQVpEO0FBYUEsRUFkRDs7QUFnQkFMLFVBQVUsK0JBQVYsRUFBMkMsWUFBTztBQUNqREksS0FBSSxzQkFBSixFQUE0QixZQUFPOztBQUVsQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLGVBQVc7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TztBQUNqRkksS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLGVBQVc7QUFDVixXQUFPQyxRQUFTLEtBQVQsRUFBZ0IsU0FBU08sS0FBVCxHQUFpQixDQUFFLE9BQU8sT0FBUCxDQUFnQixDQUFuRCxFQUFxRCxJQUFyRCxDQUFQO0FBQ0EsSUFKVzs7QUFNWE4sUUFORjs7QUFRQWIsVUFBT2MsS0FBUCxDQUFjTixNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBWkQ7QUFhQSxFQWREOztBQWdCQUwsVUFBVSw4QkFBVixFQUEwQyxZQUFPO0FBQ2hESSxLQUFJLDJCQUFKLEVBQWtDLFlBQU87O0FBRXhDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosZUFBVztBQUNWLFdBQU9DLFFBQVMsRUFBVCxFQUFhLE1BQWIsRUFBcUIsRUFBckIsQ0FBUDtBQUNBLElBSlc7O0FBTVhDLFFBTkY7O0FBUUFiLFVBQU9jLEtBQVAsQ0FBY04sTUFBZCxFQUFzQixNQUF0Qjs7QUFFQSxHQVpEO0FBYUEsRUFkRDs7QUFnQkEsQ0E1TkQ7O0FBOE5BIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJ3aWNoZXZyXCIsXG5cdFx0XHRcInBhdGhcIjogXCJ3aWNoZXZyL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy93aWNoZXZyLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xuLy86IEBlbmQtYnJpZGdlXG5cblxuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuXG5kZXNjcmliZSggXCJ3aWNoZXZyXCIsICggKSA9PiB7XG5cblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoZXZyKCAnJywgZmFsc2UsIHRydWUgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHdpY2hldnIoIFwiXCIsIGZhbHNlLCB0cnVlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoZXZyKCAxLCAnaGVsbG8nLCB0cnVlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIDFcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiB3aWNoZXZyKCAxLCBcImhlbGxvXCIsIHRydWUgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgMSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hldnIoIGZhbHNlLCBbIF0sIFsgMSwgMiwgMyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgMSwgMiwgMyBdXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KCB3aWNoZXZyKCBmYWxzZSwgWyBdLCBbIDEsIDIsIDMgXSApICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIEpTT04ucGFyc2UoIHJlc3VsdCApLCBbIDEsIDIsIDMgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hldnIoIGZhbHNlLCBTeW1ib2wuZm9yKCAnaWQnICksIGZ1bmN0aW9uIGhlbGxvKCApeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZ1bmN0aW9uIGhlbGxvKCApeyB9XCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IGZ1bmN0aW9uIGhlbGxvKCApeyB9O1xuXHRcdFx0XHRcdHJldHVybiB3aWNoZXZyKCBmYWxzZSwgU3ltYm9sLmZvciggXCJpZFwiICksIHRlc3QgKS50b1N0cmluZyggKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJmdW5jdGlvbiBoZWxsbyggKXsgfVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2ljaGV2ciggbnVsbCwgU3ltYm9sLmZvciggJ2hlbGxvJyApIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFN5bWJvbC5mb3IoICdoZWxsbycgKVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiB3aWNoZXZyKCBudWxsLCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnRvU3RyaW5nKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKS50b1N0cmluZyggKSApO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hldnIoIHsgfSwgU3ltYm9sLmZvciggJ2Nsb2FrZWQnICksIHRydWUgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZW1wdHkgb2JqZWN0XCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHdpY2hldnIoIHsgfSwgU3ltYm9sLmZvciggXCJjbG9ha2VkXCIgKSwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByZXN1bHQsIHsgfSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hldnIoIGZ1bmN0aW9uIGhlbGxvKCApeyB9LCAnaGVsbG8nLCB0cnVlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZ1bmN0aW9uIGhlbGxvKCApeyB9XCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cblx0XHRcdFx0XHRsZXQgdGVzdDIgPSBmdW5jdGlvbiBoZWxsbyggKXsgfTtcblx0XHRcdFx0XHRyZXR1cm4gd2ljaGV2ciggdGVzdDIsIFwiaGVsbG9cIiwgdHJ1ZSApLnRvU3RyaW5nKCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcImZ1bmN0aW9uIGhlbGxvKCApeyB9XCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoZXZyKCAnJywgZmFsc2UsICdoZWxsbycgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ2hlbGxvJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHdpY2hldnIoIFwiXCIsIGZhbHNlLCBcImhlbGxvXCIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJoZWxsb1wiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2ljaGV2ciggJycsIGZhbHNlLCB7IDA6ICdoZWxsbycgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB7IDA6ICdoZWxsbycgfVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggd2ljaGV2ciggXCJcIiwgZmFsc2UsIHsgMDogXCJoZWxsb1wiIH0gKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBKU09OLnBhcnNlKCByZXN1bHQgKSwgeyAwOiBcImhlbGxvXCIgfSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hldnIoIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gJ2hlbGxvJyB9LCBmdW5jdGlvbiBwcm9jZWR1cmUoICl7IHRocm93IG5ldyBFcnJvciggJ25vIG9wZXJhdGlvbicgKSB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gJ2hlbGxvJyB9XCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblxuXHRcdFx0XHRcdGxldCB0ZXN0NCA9IGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gXCJoZWxsb1wiIH07XG5cblx0XHRcdFx0XHRyZXR1cm4gd2ljaGV2ciggdGVzdDQsXG5cdFx0XHRcdFx0XHRcdGZ1bmN0aW9uIHByb2NlZHVyZSggKXsgdGhyb3cgbmV3IEVycm9yKCBcIm5vIG9wZXJhdGlvblwiICkgfSApLnRvU3RyaW5nKCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LCBmdW5jdGlvbiBoZWxsbyggKXsgcmV0dXJuIFwiaGVsbG9cIiB9LnRvU3RyaW5nKCApICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2ljaGV2ciggZmFsc2UsIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gJ2hlbGxvJyB9LCB0cnVlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiB3aWNoZXZyKCBmYWxzZSwgZnVuY3Rpb24gaGVsbG8oICl7IHJldHVybiBcImhlbGxvXCIgfSwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2ljaGV2ciggJycsICd5ZWFoJywgeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICd5ZWFoJ1wiICwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiB3aWNoZXZyKCBcIlwiLCBcInllYWhcIiwgeyB9ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIFwieWVhaFwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
