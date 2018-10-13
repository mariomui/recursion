const {each, parse, assertEquals, isWhat} = require('../test.js');
const stringifyJSON = require('./stringifyJSON.js');
//some tests.


var obj = {a:1, b: 1};
var arr = [1, 2, [3, 4]];
var arr2 = [1,2,3,4];
var obj2 = {"a":1,"b":2, two: [1,2], "c":3};
var obj3 = {"a":'jack', 'bjack':"mix", a: 10, "a": 10};

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

assertEquals(stringifyJSON(obj), JSON.stringify(obj), 'objstringify');
assertEquals(stringifyJSON(obj2), JSON.stringify(obj2), 'nestobjstringify');
assertEquals(stringifyJSON(obj3), JSON.stringify(obj3), 'nestobjstringify');

console.log('\n');

assertEquals(stringifyJSON(arr), JSON.stringify(arr), 'nestedarrstringify');
assertEquals(stringifyJSON(arr2), JSON.stringify(arr2), 'arrstringify');
assertEquals(stringifyJSON([1,2]), JSON.stringify([1,2]), 'arrstringify');


//i need to learn qunit one of these days.