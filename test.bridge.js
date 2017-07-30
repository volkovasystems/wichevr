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

var assert = require("assert");





//: @bridge:
var path = require("path");
//: @end-bridge







//: @bridge:



//: @end-bridge





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7OztBQVFBOzs7O0FBSUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwid2ljaGV2clwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJ3aWNoZXZyL3Rlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy93aWNoZXZyLmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwid2ljaGV2clwiOiBcIndpY2hldnJcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJhc3NlcnRcIiApO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAYnJpZGdlOlxyXG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcclxuLy86IEBlbmQtYnJpZGdlXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGJyaWRnZTpcclxuXHJcblxyXG5cclxuLy86IEBlbmQtYnJpZGdlXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gY2xhc3MgQ2xhc3NBe1xyXG4vLyBcdGNvbnN0cnVjdG9yKCApeyB9XHJcbi8vIFx0bWV0aG9kKCApeyByZXR1cm4gXCJoZWxsb1wiOyB9XHJcbi8vIH1cclxuXHJcbi8vIGxldCB0ZXN0QSA9IG5ldyBDbGFzc0EoICk7XHJcbi8vIGFzc2VydC5kZWVwRXF1YWwoIHdpY2hldnIoIHsgfSwgdGVzdEEgKSwgeyB9LCBcInNob3VsZCBiZSBkZWVwbHkgZXF1YWxcIiApO1xyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCB3aWNoZXZyKCB0ZXN0QSwgeyB9ICksIHRlc3RBLCBcInNob3VsZCBiZSBkZWVwbHkgZXF1YWxcIiApO1xyXG5cclxuXHJcbi8vIGFzc2VydC5kZWVwRXF1YWwoIHdpY2hldnIoIFsgXSwgdHJ1ZSApLCBbIF0sIFwic2hvdWxkIGJlIGRlZXBseSBlcXVhbFwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHdpY2hldnIoIHRydWUsIFsgXSApLCB0cnVlLCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHdpY2hldnIoIEluZmluaXR5LCBcIlwiLCBudWxsICksIEluZmluaXR5LCBcInNob3VsZCBiZSBlcXVhbFwiICk7XHJcblxyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCB3aWNoZXZyKCBudWxsLCB7IH0gKSwgeyB9LCBcInNob3VsZCBiZSBkZWVlcGx5IGVxdWFsXCIgKTtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCggd2ljaGV2ciggbnVsbCwgdW5kZWZpbmVkLCBOYU4udG9TdHJpbmcoICkgKSwgTmFOLnRvU3RyaW5nKCApLCBcInNob3VsZCBiZSBlcXVhbFwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHdpY2hldnIoIDAsIDEgKSwgMSwgXCJzaG91bGQgaGF2ZSB2YWx1ZSAxXCIgKTtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCggd2ljaGV2ciggMCwgXCJcIiApLCBcIlwiLCBcInNob3VsZCBoYXZlIGVtcHR5IHN0cmluZ1wiICk7XHJcblxyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCB3aWNoZXZyKCAwLCB7IH0gKSwgeyB9LCBcInNob3VsZCBoYXZlIGVtcHR5IG9iamVjdFwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHdpY2hldnIoIDAsIHsgfSwgdHJ1ZSApLCB0cnVlLCBcInNob3VsZCBoYXZlIGJvb2xlYW4gdHJ1ZVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHdpY2hldnIoIFwieWVhaFwiLCAwLCB7IH0gKSwgXCJ5ZWFoXCIsIFwic2hvdWxkIGhhdmUgdmFsdWUgJ3llYWgnXCIgKTtcclxuXHJcbi8vIGFzc2VydC5kZWVwRXF1YWwoIHdpY2hldnIoIHsgfSwgMCwgXCJ5ZWFoXCIgKSwgeyB9LCBcInNob3VsZCBiZSBlcXVhbFwiICk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyggXCJva1wiICk7XHJcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
