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
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);var _arguments = arguments;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("assert");



//: @client:
var wichevr = require("./wichevr.support.js");
//: @end-client






//: @client: 

describe("wichevr", function () {

	describe("\"wichevr( \"\", false, true )\"", function () {
		it("should return true", function () {

			assert.equal(wichevr("", false, true), true);

		});
	});

	describe("\"wichevr( false, [ ], [ 1, 2, 3 ] )\"", function () {
		it("should return 1", function () {

			assert.equal(wichevr(1, "hello", true), 1);

		});
	});

	describe("wichevr( false, [ ], [ 1, 2, 3 ] )", function () {
		it("should be deeply equal", function () {

			assert.deepEqual(wichevr(false, [], [1, 2, 3]), [1, 2, 3]);

		});
	});

	describe("\"wichevr( false, Symbol.for( \"id\" ), test )\"", function () {
		it("should return value of test variable", function () {

			var test = function hello() {};
			assert.deepEqual(wichevr(false, (0, _for2.default)("id"), test), test);

		});
	});

	describe("\"wichevr( null, Symbol.for( \"hello\" ) )\"", function () {
		it("should be deeply equal", function () {

			assert.equal(wichevr(null, (0, _for2.default)("hello")), (0, _for2.default)("hello"));

		});
	});

	describe("\"wichevr( { }, Symbol.for( \"cloaked\" ), true )\"", function () {
		it("should return empty object", function () {

			assert.deepEqual(wichevr({}, (0, _for2.default)("cloaked"), true), {});

		});
	});

	describe("\"wichevr( test2, \"hello\", true )\"", function () {
		it("should return value of test variable", function () {

			var test2 = function hello() {};
			assert.deepEqual(wichevr(test2, "hello", true), test2);

		});
	});

	describe("\"wichevr( \"\", false, \"hello\" )\"", function () {
		it("should return 'hello'", function () {

			assert.equal(wichevr("", false, "hello"), "hello");

		});
	});

	describe("\"wichevr( \"\", false, arguments )\"", function () {
		it("should return arguments", function () {

			assert.deepEqual(wichevr("", false, _arguments), _arguments);

		});
	});

	describe("\"wichevr( test4,function procedure( ){ throw new Error( \"no operation\" ) } )\"", function () {
		it("should be deeply equal", function () {

			var test4 = function hello() {return "hello";};
			assert.deepEqual(wichevr(test4,
			function procedure() {throw new Error("no operation");}),
			test4);

		});
	});

	describe("\"wichevr( false, function hello( ){ return \"hello\" }, true )\"", function () {
		it("should return true", function () {

			assert.equal(wichevr(false, function hello() {return "hello";}, true), true);

		});
	});

	describe("\"wichevr( \"\", \"yeah\", { } )\"", function () {
		it("should have value 'yeah'", function () {

			assert.equal(wichevr("", "yeah", {}), "yeah");

		});
	});

});

//: @end-client





// class ClassA{
// 	constructor( ){ }
// 	method( ){ return "hello"; }
// }

// let testA = new ClassA( );
// assert.deepEqual( wichevr( { }, testA ), { }, "should be deeply equal" );
// assert.deepEqual( wichevr( testA, { } ), testA, "should be deeply equal" );

// assert.deepEqual( wichevr( [ ], true ), [ ], "should be deeply equal" );

// assert.equal( wichevr( true, [ ] ), true, "should return true" );

// assert.equal( wichevr( Infinity, "", null ), Infinity, "should be equal" );

// assert.deepEqual( wichevr( null, { } ), { }, "should be deeeply equal" );

// assert.equal( wichevr( null, undefined, NaN.toString( ) ), NaN.toString( ), "should be equal" );

// assert.equal( wichevr( 0, 1 ), 1, "should have value 1" );

// assert.equal( wichevr( 0, "" ), "", "should have empty string" );

// assert.deepEqual( wichevr( 0, { } ), { }, "should have empty object" );

// assert.equal( wichevr( 0, { }, true ), true, "should have boolean true" );

// assert.equal( wichevr( "yeah", 0, { } ), "yeah", "should have value 'yeah'" );

// assert.deepEqual( wichevr( { }, 0, "yeah" ), { }, "should be equal" );

// console.log( "ok" );
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwid2ljaGV2ciIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsImRlZXBFcXVhbCIsInRlc3QiLCJoZWxsbyIsInRlc3QyIiwidGVzdDQiLCJwcm9jZWR1cmUiLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFVBQVVELFFBQVMsc0JBQVQsQ0FBaEI7QUFDQTs7Ozs7OztBQU9BOztBQUVBRSxTQUFVLFNBQVYsRUFBcUIsWUFBTzs7QUFFM0JBLDhDQUEwQyxZQUFPO0FBQ2hEQyxLQUFJLG9CQUFKLEVBQTBCLFlBQU87O0FBRWhDSixVQUFPSyxLQUFQLENBQWNILFFBQVMsRUFBVCxFQUFhLEtBQWIsRUFBb0IsSUFBcEIsQ0FBZCxFQUEwQyxJQUExQzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsb0RBQWtELFlBQU87QUFDekRDLEtBQUksaUJBQUosRUFBdUIsWUFBTzs7QUFFNUJKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxDQUFULEVBQVksT0FBWixFQUFxQixJQUFyQixDQUFkLEVBQTJDLENBQTNDOztBQUVBLEdBSkY7QUFLQyxFQU5EOztBQVFBQyxVQUFVLG9DQUFWLEVBQWdELFlBQU87QUFDdkRDLEtBQUksd0JBQUosRUFBOEIsWUFBTzs7QUFFbkNKLFVBQU9NLFNBQVAsQ0FBa0JKLFFBQVMsS0FBVCxFQUFnQixFQUFoQixFQUFxQixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUFyQixDQUFsQixFQUFzRCxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUF0RDs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsOERBQTBELFlBQU87QUFDakVDLEtBQUksc0NBQUosRUFBNEMsWUFBTzs7QUFFakQsT0FBSUcsT0FBTyxTQUFTQyxLQUFULEdBQWlCLENBQUcsQ0FBL0I7QUFDQVIsVUFBT00sU0FBUCxDQUFrQkosUUFBUyxLQUFULEVBQWdCLG1CQUFZLElBQVosQ0FBaEIsRUFBb0NLLElBQXBDLENBQWxCLEVBQThEQSxJQUE5RDs7QUFFQSxHQUxGO0FBTUMsRUFQRDs7QUFTQUosMERBQXNELFlBQU87QUFDN0RDLEtBQUksd0JBQUosRUFBOEIsWUFBTzs7QUFFbkNKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxJQUFULEVBQWUsbUJBQVksT0FBWixDQUFmLENBQWQsRUFBc0QsbUJBQVksT0FBWixDQUF0RDs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsaUVBQTZELFlBQU87QUFDcEVDLEtBQUksNEJBQUosRUFBa0MsWUFBTzs7QUFFdkNKLFVBQU9NLFNBQVAsQ0FBa0JKLFFBQVMsRUFBVCxFQUFjLG1CQUFZLFNBQVosQ0FBZCxFQUF1QyxJQUF2QyxDQUFsQixFQUFpRSxFQUFqRTs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsbURBQStDLFlBQU87QUFDdERDLEtBQUksc0NBQUosRUFBNEMsWUFBTzs7QUFFakQsT0FBSUssUUFBUSxTQUFTRCxLQUFULEdBQWlCLENBQUcsQ0FBaEM7QUFDQVIsVUFBT00sU0FBUCxDQUFrQkosUUFBU08sS0FBVCxFQUFnQixPQUFoQixFQUF5QixJQUF6QixDQUFsQixFQUFtREEsS0FBbkQ7O0FBRUEsR0FMRjtBQU1DLEVBUEQ7O0FBU0FOLG1EQUE2QyxZQUFPO0FBQ3BEQyxLQUFJLHVCQUFKLEVBQTZCLFlBQU87O0FBRWxDSixVQUFPSyxLQUFQLENBQWNILFFBQVMsRUFBVCxFQUFhLEtBQWIsRUFBb0IsT0FBcEIsQ0FBZCxFQUE2QyxPQUE3Qzs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsbURBQStDLFlBQU87QUFDdERDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFcENKLFVBQU9NLFNBQVAsQ0FBa0JKLFFBQVMsRUFBVCxFQUFhLEtBQWIsYUFBbEI7O0FBRUEsR0FKRjtBQUtDLEVBTkQ7O0FBUUFDLCtGQUEyRixZQUFPO0FBQ2xHQyxLQUFJLHdCQUFKLEVBQThCLFlBQU87O0FBRW5DLE9BQUlNLFFBQVEsU0FBU0YsS0FBVCxHQUFpQixDQUFFLE9BQU8sT0FBUCxDQUFnQixDQUEvQztBQUNFUixVQUFPTSxTQUFQLENBQWtCSixRQUFTUSxLQUFUO0FBQ2xCLFlBQVNDLFNBQVQsR0FBcUIsQ0FBRSxNQUFNLElBQUlDLEtBQUosQ0FBVyxjQUFYLENBQU4sQ0FBbUMsQ0FEeEMsQ0FBbEI7QUFFQUYsUUFGQTs7QUFJRixHQVBGO0FBUUMsRUFURDs7QUFXQVAsK0VBQTJFLFlBQU87QUFDbEZDLEtBQUksb0JBQUosRUFBMEIsWUFBTzs7QUFFL0JKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxLQUFULEVBQWdCLFNBQVNNLEtBQVQsR0FBaUIsQ0FBRSxPQUFPLE9BQVAsQ0FBZ0IsQ0FBbkQsRUFBcUQsSUFBckQsQ0FBZCxFQUEyRSxJQUEzRTs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUwsZ0RBQTBDLFlBQU87QUFDakRDLEtBQUksMEJBQUosRUFBaUMsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxFQUFULEVBQWEsTUFBYixFQUFxQixFQUFyQixDQUFkLEVBQTBDLE1BQTFDOztBQUVBLEdBSkY7QUFLQyxFQU5EOztBQVFBLENBdkdEOztBQXlHQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QHRlc3QtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLXRlc3QtbGljZW5zZVxyXG5cclxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJ3aWNoZXZyXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcIndpY2hldnIvdGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3dpY2hldnIuZ2l0XCJcclxuXHRcdH1cclxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxyXG5cclxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxyXG5cclxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcclxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcImFzc2VydFwiICk7XHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5jb25zdCB3aWNoZXZyID0gcmVxdWlyZSggXCIuL3dpY2hldnIuc3VwcG9ydC5qc1wiICk7XHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGNsaWVudDogXHJcblxyXG5kZXNjcmliZSggXCJ3aWNoZXZyXCIsICggKSA9PiB7XHJcblx0XHJcblx0ZGVzY3JpYmUoIGBcIndpY2hldnIoIFwiXCIsIGZhbHNlLCB0cnVlIClcImAsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggd2ljaGV2ciggXCJcIiwgZmFsc2UsIHRydWUgKSwgdHJ1ZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBgXCJ3aWNoZXZyKCBmYWxzZSwgWyBdLCBbIDEsIDIsIDMgXSApXCJgLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCByZXR1cm4gMVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB3aWNoZXZyKCAxLCBcImhlbGxvXCIsIHRydWUgKSwgMSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcIndpY2hldnIoIGZhbHNlLCBbIF0sIFsgMSwgMiwgMyBdIClcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgYmUgZGVlcGx5IGVxdWFsXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3aWNoZXZyKCBmYWxzZSwgWyBdLCBbIDEsIDIsIDMgXSApLCBbIDEsIDIsIDMgXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBgXCJ3aWNoZXZyKCBmYWxzZSwgU3ltYm9sLmZvciggXCJpZFwiICksIHRlc3QgKVwiYCwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgcmV0dXJuIHZhbHVlIG9mIHRlc3QgdmFyaWFibGVcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGxldCB0ZXN0ID0gZnVuY3Rpb24gaGVsbG8oICl7IH07XHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHdpY2hldnIoIGZhbHNlLCBTeW1ib2wuZm9yKCBcImlkXCIgKSwgdGVzdCApLCB0ZXN0KTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggYFwid2ljaGV2ciggbnVsbCwgU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKVwiYCwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgYmUgZGVlcGx5IGVxdWFsXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHdpY2hldnIoIG51bGwsIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICksIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIGBcIndpY2hldnIoIHsgfSwgU3ltYm9sLmZvciggXCJjbG9ha2VkXCIgKSwgdHJ1ZSApXCJgLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCByZXR1cm4gZW1wdHkgb2JqZWN0XCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3aWNoZXZyKCB7IH0sIFN5bWJvbC5mb3IoIFwiY2xvYWtlZFwiICksIHRydWUgKSwgeyB9ICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIGBcIndpY2hldnIoIHRlc3QyLCBcImhlbGxvXCIsIHRydWUgKVwiYCwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgcmV0dXJuIHZhbHVlIG9mIHRlc3QgdmFyaWFibGVcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGxldCB0ZXN0MiA9IGZ1bmN0aW9uIGhlbGxvKCApeyB9O1xyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3aWNoZXZyKCB0ZXN0MiwgXCJoZWxsb1wiLCB0cnVlICksIHRlc3QyICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIGBcIndpY2hldnIoIFwiXCIsIGZhbHNlLCBcImhlbGxvXCIgKVwiYCwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgcmV0dXJuICdoZWxsbydcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggd2ljaGV2ciggXCJcIiwgZmFsc2UsIFwiaGVsbG9cIiApLCBcImhlbGxvXCIpO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBgXCJ3aWNoZXZyKCBcIlwiLCBmYWxzZSwgYXJndW1lbnRzIClcImAsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIHJldHVybiBhcmd1bWVudHNcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHdpY2hldnIoIFwiXCIsIGZhbHNlLCBhcmd1bWVudHMgKSwgYXJndW1lbnRzICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIGBcIndpY2hldnIoIHRlc3Q0LGZ1bmN0aW9uIHByb2NlZHVyZSggKXsgdGhyb3cgbmV3IEVycm9yKCBcIm5vIG9wZXJhdGlvblwiICkgfSApXCJgLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSBkZWVwbHkgZXF1YWxcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGxldCB0ZXN0NCA9IGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gXCJoZWxsb1wiIH07XHJcblx0XHRcdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3aWNoZXZyKCB0ZXN0NCxcclxuXHRcdFx0XHRcdGZ1bmN0aW9uIHByb2NlZHVyZSggKXsgdGhyb3cgbmV3IEVycm9yKCBcIm5vIG9wZXJhdGlvblwiICkgfSApLFxyXG5cdFx0XHRcdFx0dGVzdDQgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggYFwid2ljaGV2ciggZmFsc2UsIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gXCJoZWxsb1wiIH0sIHRydWUgKVwiYCwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggd2ljaGV2ciggZmFsc2UsIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gXCJoZWxsb1wiIH0sIHRydWUgKSwgdHJ1ZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBgXCJ3aWNoZXZyKCBcIlwiLCBcInllYWhcIiwgeyB9IClcImAsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGhhdmUgdmFsdWUgJ3llYWgnXCIgLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB3aWNoZXZyKCBcIlwiLCBcInllYWhcIiwgeyB9ICksIFwieWVhaFwiICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcbn0gKTtcclxuXHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIGNsYXNzIENsYXNzQXtcclxuLy8gXHRjb25zdHJ1Y3RvciggKXsgfVxyXG4vLyBcdG1ldGhvZCggKXsgcmV0dXJuIFwiaGVsbG9cIjsgfVxyXG4vLyB9XHJcblxyXG4vLyBsZXQgdGVzdEEgPSBuZXcgQ2xhc3NBKCApO1xyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCB3aWNoZXZyKCB7IH0sIHRlc3RBICksIHsgfSwgXCJzaG91bGQgYmUgZGVlcGx5IGVxdWFsXCIgKTtcclxuLy8gYXNzZXJ0LmRlZXBFcXVhbCggd2ljaGV2ciggdGVzdEEsIHsgfSApLCB0ZXN0QSwgXCJzaG91bGQgYmUgZGVlcGx5IGVxdWFsXCIgKTtcclxuXHJcbi8vIGFzc2VydC5kZWVwRXF1YWwoIHdpY2hldnIoIFsgXSwgdHJ1ZSApLCBbIF0sIFwic2hvdWxkIGJlIGRlZXBseSBlcXVhbFwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHdpY2hldnIoIHRydWUsIFsgXSApLCB0cnVlLCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHdpY2hldnIoIEluZmluaXR5LCBcIlwiLCBudWxsICksIEluZmluaXR5LCBcInNob3VsZCBiZSBlcXVhbFwiICk7XHJcblxyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCB3aWNoZXZyKCBudWxsLCB7IH0gKSwgeyB9LCBcInNob3VsZCBiZSBkZWVlcGx5IGVxdWFsXCIgKTtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCggd2ljaGV2ciggbnVsbCwgdW5kZWZpbmVkLCBOYU4udG9TdHJpbmcoICkgKSwgTmFOLnRvU3RyaW5nKCApLCBcInNob3VsZCBiZSBlcXVhbFwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHdpY2hldnIoIDAsIDEgKSwgMSwgXCJzaG91bGQgaGF2ZSB2YWx1ZSAxXCIgKTtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCggd2ljaGV2ciggMCwgXCJcIiApLCBcIlwiLCBcInNob3VsZCBoYXZlIGVtcHR5IHN0cmluZ1wiICk7XHJcblxyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCB3aWNoZXZyKCAwLCB7IH0gKSwgeyB9LCBcInNob3VsZCBoYXZlIGVtcHR5IG9iamVjdFwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHdpY2hldnIoIDAsIHsgfSwgdHJ1ZSApLCB0cnVlLCBcInNob3VsZCBoYXZlIGJvb2xlYW4gdHJ1ZVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHdpY2hldnIoIFwieWVhaFwiLCAwLCB7IH0gKSwgXCJ5ZWFoXCIsIFwic2hvdWxkIGhhdmUgdmFsdWUgJ3llYWgnXCIgKTtcclxuXHJcbi8vIGFzc2VydC5kZWVwRXF1YWwoIHdpY2hldnIoIHsgfSwgMCwgXCJ5ZWFoXCIgKSwgeyB9LCBcInNob3VsZCBiZSBlcXVhbFwiICk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyggXCJva1wiICk7XHJcbiJdfQ==
//# sourceMappingURL=test.support.js.map
