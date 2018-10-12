const {parse, assertEquals} = require('../test.js');


var obj = {a:1};
assertEquals(parse(obj,'a'), `"a":1`, 'parsing test');