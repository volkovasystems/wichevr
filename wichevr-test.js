const assert = require( "assert" );
const wichevr = require( "./wichevr.js" );

assert.equal( wichevr( "", "yeah", { } ), "yeah", "should have value 'yeah'" );
assert.equal( wichevr( Infinity, "", null ), Infinity, "should be equal" );
assert.equal( wichevr( false, true ), true, "should have boolean true" );
assert.equal( wichevr( true, false ), true, "should have boolean true" );
assert.equal( wichevr( 0, 1 ), 1, "should have value 1" );
assert.equal( wichevr( 0, "" ), "", "should have empty string" );
assert.deepEqual( wichevr( 0, { } ), { }, "should have empty object" );
assert.equal( wichevr( 0, { }, true ), true, "should have boolean true" );
assert.equal( wichevr( "yeah", 0, { } ), "yeah", "should have value 'yeah'" );
assert.deepEqual( wichevr( { }, 0, "yeah" ), { }, "should be equal" );
assert.deepEqual( wichevr( 0, { } ), { }, "should be equal" );

//assert.equal( wichevr( null, undefined, "", NaN ), NaN, "should be equal" );

console.log( "ok" );
