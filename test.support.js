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
		it("should be equal to true", function () {

			assert.equal(wichevr("", false, true), true);

		});
	});

	describe("\"wichevr( false, [ ], [ 1, 2, 3 ] )\"", function () {
		it("should be equal to 1", function () {

			assert.equal(wichevr(1, "hello", true), 1);

		});
	});

	describe("wichevr( false, [ ], [ 1, 2, 3 ] )", function () {
		it("should be deeply equal", function () {

			assert.deepEqual(wichevr(false, [], [1, 2, 3]), [1, 2, 3]);

		});
	});

	describe("\"wichevr( false, Symbol.for( \"id\" ), test )\"", function () {
		it("should be equal to value of test variable", function () {

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
		it("should be equal to empty object", function () {

			assert.deepEqual(wichevr({}, (0, _for2.default)("cloaked"), true), {});

		});
	});

	describe("\"wichevr( test2, \"hello\", true )\"", function () {
		it("should be equal to value of test variable", function () {

			var test2 = function hello() {};
			assert.deepEqual(wichevr(test2, "hello", true), test2);

		});
	});

	describe("\"wichevr( \"\", false, \"hello\" )\"", function () {
		it("should be equal to 'hello'", function () {

			assert.equal(wichevr("", false, "hello"), "hello");

		});
	});

	describe("\"wichevr( \"\", false, arguments )\"", function () {
		it("should be equal to arguments", function () {

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
		it("should be equal to true", function () {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwid2ljaGV2ciIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsImRlZXBFcXVhbCIsInRlc3QiLCJoZWxsbyIsInRlc3QyIiwidGVzdDQiLCJwcm9jZWR1cmUiLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFVBQVVELFFBQVMsc0JBQVQsQ0FBaEI7QUFDQTs7Ozs7OztBQU9BOztBQUVBRSxTQUFVLFNBQVYsRUFBcUIsWUFBTzs7QUFFM0JBLDhDQUEwQyxZQUFPO0FBQ2hEQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDSixVQUFPSyxLQUFQLENBQWNILFFBQVMsRUFBVCxFQUFhLEtBQWIsRUFBb0IsSUFBcEIsQ0FBZCxFQUEwQyxJQUExQzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsb0RBQWtELFlBQU87QUFDekRDLEtBQUksc0JBQUosRUFBNEIsWUFBTzs7QUFFakNKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxDQUFULEVBQVksT0FBWixFQUFxQixJQUFyQixDQUFkLEVBQTJDLENBQTNDOztBQUVBLEdBSkY7QUFLQyxFQU5EOztBQVFBQyxVQUFVLG9DQUFWLEVBQWdELFlBQU87QUFDdkRDLEtBQUksd0JBQUosRUFBOEIsWUFBTzs7QUFFbkNKLFVBQU9NLFNBQVAsQ0FBa0JKLFFBQVMsS0FBVCxFQUFnQixFQUFoQixFQUFxQixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUFyQixDQUFsQixFQUFzRCxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUF0RDs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsOERBQTBELFlBQU87QUFDakVDLEtBQUksMkNBQUosRUFBaUQsWUFBTzs7QUFFdEQsT0FBSUcsT0FBTyxTQUFTQyxLQUFULEdBQWlCLENBQUcsQ0FBL0I7QUFDQVIsVUFBT00sU0FBUCxDQUFrQkosUUFBUyxLQUFULEVBQWdCLG1CQUFZLElBQVosQ0FBaEIsRUFBb0NLLElBQXBDLENBQWxCLEVBQThEQSxJQUE5RDs7QUFFQSxHQUxGO0FBTUMsRUFQRDs7QUFTQUosMERBQXNELFlBQU87QUFDN0RDLEtBQUksd0JBQUosRUFBOEIsWUFBTzs7QUFFbkNKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxJQUFULEVBQWUsbUJBQVksT0FBWixDQUFmLENBQWQsRUFBc0QsbUJBQVksT0FBWixDQUF0RDs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsaUVBQTZELFlBQU87QUFDcEVDLEtBQUksaUNBQUosRUFBdUMsWUFBTzs7QUFFNUNKLFVBQU9NLFNBQVAsQ0FBa0JKLFFBQVMsRUFBVCxFQUFjLG1CQUFZLFNBQVosQ0FBZCxFQUF1QyxJQUF2QyxDQUFsQixFQUFpRSxFQUFqRTs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsbURBQStDLFlBQU87QUFDdERDLEtBQUksMkNBQUosRUFBaUQsWUFBTzs7QUFFdEQsT0FBSUssUUFBUSxTQUFTRCxLQUFULEdBQWlCLENBQUcsQ0FBaEM7QUFDQVIsVUFBT00sU0FBUCxDQUFrQkosUUFBU08sS0FBVCxFQUFnQixPQUFoQixFQUF5QixJQUF6QixDQUFsQixFQUFtREEsS0FBbkQ7O0FBRUEsR0FMRjtBQU1DLEVBUEQ7O0FBU0FOLG1EQUE2QyxZQUFPO0FBQ3BEQyxLQUFJLDRCQUFKLEVBQWtDLFlBQU87O0FBRXZDSixVQUFPSyxLQUFQLENBQWNILFFBQVMsRUFBVCxFQUFhLEtBQWIsRUFBb0IsT0FBcEIsQ0FBZCxFQUE2QyxPQUE3Qzs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsbURBQStDLFlBQU87QUFDdERDLEtBQUksOEJBQUosRUFBb0MsWUFBTzs7QUFFekNKLFVBQU9NLFNBQVAsQ0FBa0JKLFFBQVMsRUFBVCxFQUFhLEtBQWIsYUFBbEI7O0FBRUEsR0FKRjtBQUtDLEVBTkQ7O0FBUUFDLCtGQUEyRixZQUFPO0FBQ2xHQyxLQUFJLHdCQUFKLEVBQThCLFlBQU87O0FBRW5DLE9BQUlNLFFBQVEsU0FBU0YsS0FBVCxHQUFpQixDQUFFLE9BQU8sT0FBUCxDQUFnQixDQUEvQztBQUNFUixVQUFPTSxTQUFQLENBQWtCSixRQUFTUSxLQUFUO0FBQ2xCLFlBQVNDLFNBQVQsR0FBcUIsQ0FBRSxNQUFNLElBQUlDLEtBQUosQ0FBVyxjQUFYLENBQU4sQ0FBbUMsQ0FEeEMsQ0FBbEI7QUFFQUYsUUFGQTs7QUFJRixHQVBGO0FBUUMsRUFURDs7QUFXQVAsK0VBQTJFLFlBQU87QUFDbEZDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFcENKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxLQUFULEVBQWdCLFNBQVNNLEtBQVQsR0FBaUIsQ0FBRSxPQUFPLE9BQVAsQ0FBZ0IsQ0FBbkQsRUFBcUQsSUFBckQsQ0FBZCxFQUEyRSxJQUEzRTs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUwsZ0RBQTBDLFlBQU87QUFDakRDLEtBQUksMEJBQUosRUFBaUMsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxFQUFULEVBQWEsTUFBYixFQUFxQixFQUFyQixDQUFkLEVBQTBDLE1BQTFDOztBQUVBLEdBSkY7QUFLQyxFQU5EOztBQVFBLENBdkdEOztBQXlHQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwid2ljaGV2clwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJ3aWNoZXZyL3Rlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy93aWNoZXZyLmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwid2ljaGV2clwiOiBcIndpY2hldnJcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJhc3NlcnRcIiApO1xyXG5cclxuXHJcblxyXG4vLzogQGNsaWVudDpcclxuY29uc3Qgd2ljaGV2ciA9IHJlcXVpcmUoIFwiLi93aWNoZXZyLnN1cHBvcnQuanNcIiApO1xyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6XHJcblxyXG5kZXNjcmliZSggXCJ3aWNoZXZyXCIsICggKSA9PiB7XHJcblxyXG5cdGRlc2NyaWJlKCBgXCJ3aWNoZXZyKCBcIlwiLCBmYWxzZSwgdHJ1ZSApXCJgLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggd2ljaGV2ciggXCJcIiwgZmFsc2UsIHRydWUgKSwgdHJ1ZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBgXCJ3aWNoZXZyKCBmYWxzZSwgWyBdLCBbIDEsIDIsIDMgXSApXCJgLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAxXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHdpY2hldnIoIDEsIFwiaGVsbG9cIiwgdHJ1ZSApLCAxICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwid2ljaGV2ciggZmFsc2UsIFsgXSwgWyAxLCAyLCAzIF0gKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSBkZWVwbHkgZXF1YWxcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHdpY2hldnIoIGZhbHNlLCBbIF0sIFsgMSwgMiwgMyBdICksIFsgMSwgMiwgMyBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIGBcIndpY2hldnIoIGZhbHNlLCBTeW1ib2wuZm9yKCBcImlkXCIgKSwgdGVzdCApXCJgLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB2YWx1ZSBvZiB0ZXN0IHZhcmlhYmxlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgdGVzdCA9IGZ1bmN0aW9uIGhlbGxvKCApeyB9O1xyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3aWNoZXZyKCBmYWxzZSwgU3ltYm9sLmZvciggXCJpZFwiICksIHRlc3QgKSwgdGVzdCk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIGBcIndpY2hldnIoIG51bGwsIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApIClcImAsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGJlIGRlZXBseSBlcXVhbFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB3aWNoZXZyKCBudWxsLCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBgXCJ3aWNoZXZyKCB7IH0sIFN5bWJvbC5mb3IoIFwiY2xvYWtlZFwiICksIHRydWUgKVwiYCwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZW1wdHkgb2JqZWN0XCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3aWNoZXZyKCB7IH0sIFN5bWJvbC5mb3IoIFwiY2xvYWtlZFwiICksIHRydWUgKSwgeyB9ICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIGBcIndpY2hldnIoIHRlc3QyLCBcImhlbGxvXCIsIHRydWUgKVwiYCwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdmFsdWUgb2YgdGVzdCB2YXJpYWJsZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHRlc3QyID0gZnVuY3Rpb24gaGVsbG8oICl7IH07XHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHdpY2hldnIoIHRlc3QyLCBcImhlbGxvXCIsIHRydWUgKSwgdGVzdDIgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggYFwid2ljaGV2ciggXCJcIiwgZmFsc2UsIFwiaGVsbG9cIiApXCJgLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnaGVsbG8nXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHdpY2hldnIoIFwiXCIsIGZhbHNlLCBcImhlbGxvXCIgKSwgXCJoZWxsb1wiKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggYFwid2ljaGV2ciggXCJcIiwgZmFsc2UsIGFyZ3VtZW50cyApXCJgLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBhcmd1bWVudHNcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHdpY2hldnIoIFwiXCIsIGZhbHNlLCBhcmd1bWVudHMgKSwgYXJndW1lbnRzICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIGBcIndpY2hldnIoIHRlc3Q0LGZ1bmN0aW9uIHByb2NlZHVyZSggKXsgdGhyb3cgbmV3IEVycm9yKCBcIm5vIG9wZXJhdGlvblwiICkgfSApXCJgLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSBkZWVwbHkgZXF1YWxcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGxldCB0ZXN0NCA9IGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gXCJoZWxsb1wiIH07XHJcblx0XHRcdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3aWNoZXZyKCB0ZXN0NCxcclxuXHRcdFx0XHRcdGZ1bmN0aW9uIHByb2NlZHVyZSggKXsgdGhyb3cgbmV3IEVycm9yKCBcIm5vIG9wZXJhdGlvblwiICkgfSApLFxyXG5cdFx0XHRcdFx0dGVzdDQgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggYFwid2ljaGV2ciggZmFsc2UsIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gXCJoZWxsb1wiIH0sIHRydWUgKVwiYCwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB3aWNoZXZyKCBmYWxzZSwgZnVuY3Rpb24gaGVsbG8oICl7IHJldHVybiBcImhlbGxvXCIgfSwgdHJ1ZSApLCB0cnVlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIGBcIndpY2hldnIoIFwiXCIsIFwieWVhaFwiLCB7IH0gKVwiYCwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgaGF2ZSB2YWx1ZSAneWVhaCdcIiAsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHdpY2hldnIoIFwiXCIsIFwieWVhaFwiLCB7IH0gKSwgXCJ5ZWFoXCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxufSApO1xyXG5cclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuIl19
//# sourceMappingURL=test.support.js.map
