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
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var wichevr = require("./wichevr.support.js");
//: @end-client






//: @client:

describe("wichevr", function () {

	describe("`wichevr( '', false, true )`", function () {
		it("should be equal to true", function () {

			assert.equal(wichevr("", false, true), true);

		});
	});

	describe("`wichevr( 1, 'hello', true )`", function () {
		it("should be equal to 1", function () {

			assert.equal(wichevr(1, "hello", true), 1);

		});
	});

	describe("`wichevr( false, [ ], [ 1, 2, 3 ] )`", function () {
		it("should be equal to [ 1, 2, 3 ]", function () {

			assert.deepEqual(wichevr(false, [], [1, 2, 3]), [1, 2, 3]);

		});
	});

	describe("`wichevr( false, Symbol.for( 'id' ), function hello( ){ } )`", function () {
		it("should be equal to function hello( ){ }", function () {

			var test = function hello() {};
			assert.deepEqual(wichevr(false, (0, _for2.default)("id"), test), test);

		});
	});

	describe("`wichevr( null, Symbol.for( 'hello' ) )`", function () {
		it("should be equal to Symbol.for( 'hello' )", function () {

			assert.equal(wichevr(null, (0, _for2.default)("hello")), (0, _for2.default)("hello"));

		});
	});

	describe("`wichevr( { }, Symbol.for( 'cloaked' ), true )`", function () {
		it("should be equal to empty object", function () {

			assert.deepEqual(wichevr({}, (0, _for2.default)("cloaked"), true), {});

		});
	});

	describe("`wichevr( function hello( ){ }, 'hello', true )`", function () {
		it("should be equal to function hello( ){ }", function () {

			var test2 = function hello() {};
			assert.deepEqual(wichevr(test2, "hello", true), test2);

		});
	});

	describe("`wichevr( '', false, 'hello' )`", function () {
		it("should be equal to 'hello'", function () {

			assert.equal(wichevr("", false, "hello"), "hello");

		});
	});

	describe("`wichevr( '', false, { 0: 'hello' } )`", function () {
		it("should be equal to { 0: 'hello' }", function () {

			assert.deepEqual(wichevr("", false, { 0: "hello" }), { 0: "hello" });

		});
	});

	describe("`wichevr( function hello( ){ return 'hello' }, function procedure( ){ throw new Error( 'no operation' ) } )`", function () {
		it("should be equal to function hello( ){ return 'hello' }", function () {

			var test4 = function hello() {return "hello";};
			assert.deepEqual(
			wichevr(test4,
			function procedure() {throw new Error("no operation");}),
			test4);

		});
	});

	describe("`wichevr( false, function hello( ){ return 'hello' }, true )`", function () {
		it("should be equal to true", function () {

			assert.equal(wichevr(false, function hello() {return "hello";}, true), true);

		});
	});

	describe("`wichevr( '', 'yeah', { } )`", function () {
		it("should be equal to 'yeah'", function () {

			assert.equal(wichevr("", "yeah", {}), "yeah");

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwid2ljaGV2ciIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsImRlZXBFcXVhbCIsInRlc3QiLCJoZWxsbyIsInRlc3QyIiwidGVzdDQiLCJwcm9jZWR1cmUiLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFVBQVVELFFBQVMsc0JBQVQsQ0FBaEI7QUFDQTs7Ozs7OztBQU9BOztBQUVBRSxTQUFVLFNBQVYsRUFBcUIsWUFBTzs7QUFFM0JBLFVBQVUsOEJBQVYsRUFBMEMsWUFBTztBQUNoREMsS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQ0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLEVBQVQsRUFBYSxLQUFiLEVBQW9CLElBQXBCLENBQWQsRUFBMEMsSUFBMUM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLFVBQVUsK0JBQVYsRUFBMkMsWUFBTztBQUNqREMsS0FBSSxzQkFBSixFQUE0QixZQUFPOztBQUVsQ0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLENBQVQsRUFBWSxPQUFaLEVBQXFCLElBQXJCLENBQWQsRUFBMkMsQ0FBM0M7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLFVBQVUsc0NBQVYsRUFBa0QsWUFBTztBQUN4REMsS0FBSSxnQ0FBSixFQUFzQyxZQUFPOztBQUU1Q0osVUFBT00sU0FBUCxDQUFrQkosUUFBUyxLQUFULEVBQWdCLEVBQWhCLEVBQXFCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQXJCLENBQWxCLEVBQXNELENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQXREOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyxVQUFVLDhEQUFWLEVBQTBFLFlBQU87QUFDaEZDLEtBQUkseUNBQUosRUFBK0MsWUFBTzs7QUFFckQsT0FBSUcsT0FBTyxTQUFTQyxLQUFULEdBQWlCLENBQUcsQ0FBL0I7QUFDQVIsVUFBT00sU0FBUCxDQUFrQkosUUFBUyxLQUFULEVBQWdCLG1CQUFZLElBQVosQ0FBaEIsRUFBb0NLLElBQXBDLENBQWxCLEVBQThEQSxJQUE5RDs7QUFFQSxHQUxEO0FBTUEsRUFQRDs7QUFTQUosVUFBVSwwQ0FBVixFQUFzRCxZQUFPO0FBQzVEQyxLQUFJLDBDQUFKLEVBQWdELFlBQU87O0FBRXRESixVQUFPSyxLQUFQLENBQWNILFFBQVMsSUFBVCxFQUFlLG1CQUFZLE9BQVosQ0FBZixDQUFkLEVBQXNELG1CQUFZLE9BQVosQ0FBdEQ7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLFVBQVUsaURBQVYsRUFBNkQsWUFBTztBQUNuRUMsS0FBSSxpQ0FBSixFQUF1QyxZQUFPOztBQUU3Q0osVUFBT00sU0FBUCxDQUFrQkosUUFBUyxFQUFULEVBQWMsbUJBQVksU0FBWixDQUFkLEVBQXVDLElBQXZDLENBQWxCLEVBQWlFLEVBQWpFOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyxVQUFVLGtEQUFWLEVBQThELFlBQU87QUFDcEVDLEtBQUkseUNBQUosRUFBK0MsWUFBTzs7QUFFckQsT0FBSUssUUFBUSxTQUFTRCxLQUFULEdBQWlCLENBQUcsQ0FBaEM7QUFDQVIsVUFBT00sU0FBUCxDQUFrQkosUUFBU08sS0FBVCxFQUFnQixPQUFoQixFQUF5QixJQUF6QixDQUFsQixFQUFtREEsS0FBbkQ7O0FBRUEsR0FMRDtBQU1BLEVBUEQ7O0FBU0FOLFVBQVUsaUNBQVYsRUFBNkMsWUFBTztBQUNuREMsS0FBSSw0QkFBSixFQUFrQyxZQUFPOztBQUV4Q0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLEVBQVQsRUFBYSxLQUFiLEVBQW9CLE9BQXBCLENBQWQsRUFBNkMsT0FBN0M7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLFVBQVUsd0NBQVYsRUFBb0QsWUFBTztBQUMxREMsS0FBSSxtQ0FBSixFQUF5QyxZQUFPOztBQUUvQ0osVUFBT00sU0FBUCxDQUFrQkosUUFBUyxFQUFULEVBQWEsS0FBYixFQUFvQixFQUFFLEdBQUcsT0FBTCxFQUFwQixDQUFsQixFQUF3RCxFQUFFLEdBQUcsT0FBTCxFQUF4RDs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsVUFBVSw4R0FBVixFQUEwSCxZQUFPO0FBQ2hJQyxLQUFJLHdEQUFKLEVBQThELFlBQU87O0FBRXBFLE9BQUlNLFFBQVEsU0FBU0YsS0FBVCxHQUFpQixDQUFFLE9BQU8sT0FBUCxDQUFnQixDQUEvQztBQUNBUixVQUFPTSxTQUFQO0FBQ0NKLFdBQVNRLEtBQVQ7QUFDQyxZQUFTQyxTQUFULEdBQXFCLENBQUUsTUFBTSxJQUFJQyxLQUFKLENBQVcsY0FBWCxDQUFOLENBQW1DLENBRDNELENBREQ7QUFHRUYsUUFIRjs7QUFLQSxHQVJEO0FBU0EsRUFWRDs7QUFZQVAsVUFBVSwrREFBVixFQUEyRSxZQUFPO0FBQ2pGQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDSixVQUFPSyxLQUFQLENBQWNILFFBQVMsS0FBVCxFQUFnQixTQUFTTSxLQUFULEdBQWlCLENBQUUsT0FBTyxPQUFQLENBQWdCLENBQW5ELEVBQXFELElBQXJELENBQWQsRUFBMkUsSUFBM0U7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFMLFVBQVUsOEJBQVYsRUFBMEMsWUFBTztBQUNoREMsS0FBSSwyQkFBSixFQUFrQyxZQUFPOztBQUV4Q0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLEVBQVQsRUFBYSxNQUFiLEVBQXFCLEVBQXJCLENBQWQsRUFBMEMsTUFBMUM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUEsQ0F4R0Q7O0FBMEdBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwid2ljaGV2clwiLFxuXHRcdFx0XCJwYXRoXCI6IFwid2ljaGV2ci90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvd2ljaGV2ci5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwid2ljaGV2clwiOiBcIndpY2hldnJcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IHdpY2hldnIgPSByZXF1aXJlKCBcIi4vd2ljaGV2ci5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5cbmRlc2NyaWJlKCBcIndpY2hldnJcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgd2ljaGV2ciggJycsIGZhbHNlLCB0cnVlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB3aWNoZXZyKCBcIlwiLCBmYWxzZSwgdHJ1ZSApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2ljaGV2ciggMSwgJ2hlbGxvJywgdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAxXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggd2ljaGV2ciggMSwgXCJoZWxsb1wiLCB0cnVlICksIDEgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoZXZyKCBmYWxzZSwgWyBdLCBbIDEsIDIsIDMgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIDEsIDIsIDMgXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3aWNoZXZyKCBmYWxzZSwgWyBdLCBbIDEsIDIsIDMgXSApLCBbIDEsIDIsIDMgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hldnIoIGZhbHNlLCBTeW1ib2wuZm9yKCAnaWQnICksIGZ1bmN0aW9uIGhlbGxvKCApeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZ1bmN0aW9uIGhlbGxvKCApeyB9XCIsICggKSA9PiB7XG5cblx0XHRcdGxldCB0ZXN0ID0gZnVuY3Rpb24gaGVsbG8oICl7IH07XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3aWNoZXZyKCBmYWxzZSwgU3ltYm9sLmZvciggXCJpZFwiICksIHRlc3QgKSwgdGVzdCApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hldnIoIG51bGwsIFN5bWJvbC5mb3IoICdoZWxsbycgKSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBTeW1ib2wuZm9yKCAnaGVsbG8nIClcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB3aWNoZXZyKCBudWxsLCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hldnIoIHsgfSwgU3ltYm9sLmZvciggJ2Nsb2FrZWQnICksIHRydWUgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZW1wdHkgb2JqZWN0XCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHdpY2hldnIoIHsgfSwgU3ltYm9sLmZvciggXCJjbG9ha2VkXCIgKSwgdHJ1ZSApLCB7IH0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoZXZyKCBmdW5jdGlvbiBoZWxsbyggKXsgfSwgJ2hlbGxvJywgdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmdW5jdGlvbiBoZWxsbyggKXsgfVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgdGVzdDIgPSBmdW5jdGlvbiBoZWxsbyggKXsgfTtcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHdpY2hldnIoIHRlc3QyLCBcImhlbGxvXCIsIHRydWUgKSwgdGVzdDIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoZXZyKCAnJywgZmFsc2UsICdoZWxsbycgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ2hlbGxvJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHdpY2hldnIoIFwiXCIsIGZhbHNlLCBcImhlbGxvXCIgKSwgXCJoZWxsb1wiKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoZXZyKCAnJywgZmFsc2UsIHsgMDogJ2hlbGxvJyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHsgMDogJ2hlbGxvJyB9XCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHdpY2hldnIoIFwiXCIsIGZhbHNlLCB7IDA6IFwiaGVsbG9cIiB9ICksIHsgMDogXCJoZWxsb1wiIH0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoZXZyKCBmdW5jdGlvbiBoZWxsbyggKXsgcmV0dXJuICdoZWxsbycgfSwgZnVuY3Rpb24gcHJvY2VkdXJlKCApeyB0aHJvdyBuZXcgRXJyb3IoICdubyBvcGVyYXRpb24nICkgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmdW5jdGlvbiBoZWxsbyggKXsgcmV0dXJuICdoZWxsbycgfVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgdGVzdDQgPSBmdW5jdGlvbiBoZWxsbyggKXsgcmV0dXJuIFwiaGVsbG9cIiB9O1xuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbChcblx0XHRcdFx0d2ljaGV2ciggdGVzdDQsXG5cdFx0XHRcdFx0ZnVuY3Rpb24gcHJvY2VkdXJlKCApeyB0aHJvdyBuZXcgRXJyb3IoIFwibm8gb3BlcmF0aW9uXCIgKSB9ICksXG5cdFx0XHRcdFx0dGVzdDQgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoZXZyKCBmYWxzZSwgZnVuY3Rpb24gaGVsbG8oICl7IHJldHVybiAnaGVsbG8nIH0sIHRydWUgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHdpY2hldnIoIGZhbHNlLCBmdW5jdGlvbiBoZWxsbyggKXsgcmV0dXJuIFwiaGVsbG9cIiB9LCB0cnVlICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoZXZyKCAnJywgJ3llYWgnLCB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ3llYWgnXCIgLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHdpY2hldnIoIFwiXCIsIFwieWVhaFwiLCB7IH0gKSwgXCJ5ZWFoXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuIl19
//# sourceMappingURL=test.support.js.map
