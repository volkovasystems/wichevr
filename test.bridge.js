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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7OztBQVFBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QHRlc3QtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLXRlc3QtbGljZW5zZVxyXG5cclxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJ3aWNoZXZyXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcIndpY2hldnIvdGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3dpY2hldnIuZ2l0XCJcclxuXHRcdH1cclxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxyXG5cclxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxyXG5cclxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcclxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcImFzc2VydFwiICk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBicmlkZ2U6XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xyXG4vLzogQGVuZC1icmlkZ2VcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAYnJpZGdlOlxyXG5cclxuXHJcblxyXG4vLzogQGVuZC1icmlkZ2VcclxuXHJcblxyXG4vLyBjbGFzcyBDbGFzc0F7XHJcbi8vIFx0Y29uc3RydWN0b3IoICl7IH1cclxuLy8gXHRtZXRob2QoICl7IHJldHVybiBcImhlbGxvXCI7IH1cclxuLy8gfVxyXG5cclxuLy8gbGV0IHRlc3RBID0gbmV3IENsYXNzQSggKTtcclxuLy8gYXNzZXJ0LmRlZXBFcXVhbCggd2ljaGV2ciggeyB9LCB0ZXN0QSApLCB7IH0sIFwic2hvdWxkIGJlIGRlZXBseSBlcXVhbFwiICk7XHJcbi8vIGFzc2VydC5kZWVwRXF1YWwoIHdpY2hldnIoIHRlc3RBLCB7IH0gKSwgdGVzdEEsIFwic2hvdWxkIGJlIGRlZXBseSBlcXVhbFwiICk7XHJcblxyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCB3aWNoZXZyKCBbIF0sIHRydWUgKSwgWyBdLCBcInNob3VsZCBiZSBkZWVwbHkgZXF1YWxcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCB3aWNoZXZyKCB0cnVlLCBbIF0gKSwgdHJ1ZSwgXCJzaG91bGQgcmV0dXJuIHRydWVcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCB3aWNoZXZyKCBJbmZpbml0eSwgXCJcIiwgbnVsbCApLCBJbmZpbml0eSwgXCJzaG91bGQgYmUgZXF1YWxcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmRlZXBFcXVhbCggd2ljaGV2ciggbnVsbCwgeyB9ICksIHsgfSwgXCJzaG91bGQgYmUgZGVlZXBseSBlcXVhbFwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHdpY2hldnIoIG51bGwsIHVuZGVmaW5lZCwgTmFOLnRvU3RyaW5nKCApICksIE5hTi50b1N0cmluZyggKSwgXCJzaG91bGQgYmUgZXF1YWxcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCB3aWNoZXZyKCAwLCAxICksIDEsIFwic2hvdWxkIGhhdmUgdmFsdWUgMVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHdpY2hldnIoIDAsIFwiXCIgKSwgXCJcIiwgXCJzaG91bGQgaGF2ZSBlbXB0eSBzdHJpbmdcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmRlZXBFcXVhbCggd2ljaGV2ciggMCwgeyB9ICksIHsgfSwgXCJzaG91bGQgaGF2ZSBlbXB0eSBvYmplY3RcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCB3aWNoZXZyKCAwLCB7IH0sIHRydWUgKSwgdHJ1ZSwgXCJzaG91bGQgaGF2ZSBib29sZWFuIHRydWVcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCB3aWNoZXZyKCBcInllYWhcIiwgMCwgeyB9ICksIFwieWVhaFwiLCBcInNob3VsZCBoYXZlIHZhbHVlICd5ZWFoJ1wiICk7XHJcblxyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCB3aWNoZXZyKCB7IH0sIDAsIFwieWVhaFwiICksIHsgfSwgXCJzaG91bGQgYmUgZXF1YWxcIiApO1xyXG5cclxuLy8gY29uc29sZS5sb2coIFwib2tcIiApO1xyXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
