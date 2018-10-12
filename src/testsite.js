const {each, parse, assertEquals} = require('../test.js');
const stringifyJSON = require('./stringifyJSON.js');
//some tests.


var obj = {a:1, b: 1};

assertEquals(
    each(obj, function (item, element) {
        console.log(element,item);
     }), '--', 'testing the each function. will fail automatically.'
);
assertEquals(parse(1,'a'), `"a":1`, 'parsing test');

assertEquals(stringifyJSON(obj), 'dd', 'stringifyJSONtests');
