"use strict";

/*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "wichevr",
              			"path": "wichevr/wichevr.js",
              			"file": "wichevr.js",
              			"module": "wichevr",
              			"author": "Richeve S. Bebedor",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
              			],
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/wichevr.git",
              			"test": "wichevr-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Returns whichever is the first truthy.
              
              		Else it will default to the last argument.
              	@end-module-documentation
              
              	@include:
              		{
              			"raze": "raze",
              			"truly": "truly"
              		}
              	@end-include
              */

var raze = require("raze");
var truly = require("truly");

var wichevr = function wichevr(parameter) {
	/*;
                                           	@meta-configuration:
                                           		{
                                           			"parameter:required": [
                                           				"*",
                                           				"..."
                                           			]
                                           		}
                                           	@end-meta-configuration
                                           */

	parameter = raze(arguments);

	return parameter.filter(truly)[0] || parameter.reverse()[0];
};

module.exports = wichevr;

//# sourceMappingURL=wichevr.support.js.map