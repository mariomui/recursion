const {each, parse, assertEquals, isWhat} = require('../test.js');
const stringifyJSON = require('./stringifyJSON.js');
//some tests.


var obj = {a:1, b: 1};
var arr = [1, 2, [3, 4]];
var arr2 = [1,2,3,4];


assertEquals(
    each(obj, function (item, element) {
        console.log(element,item);
     }), '--', 'testing the each function. will fail automatically.'
);
assertEquals(parse(1,'a'), `"a":1`, 'parsing test\n');
assertEquals(isWhat(null), undefined, 'null typetests');
assertEquals(isWhat(arr), 'array', 'array typetests');
assertEquals(isWhat(obj), 'object', 'object typetests');


console.log('\n');

assertEquals(stringifyJSON(obj), 'dd', 'objstringifyJSONtests');
assertEquals(stringifyJSON(arr), 'dd', 'arrstringifyJSONtests');
assertEquals(stringifyJSON(arr2), 'dd', 'arrstringifyJSONtests');
assertEquals(stringifyJSON([1,2]), 'dd', 'arrstringifyJSONtests');
