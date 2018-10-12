// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
const {each, parse, assertEquals, isWhat} = require('../test.js');

var answer = '';
var stringifyJSON = function(obj) {
  // your code goes here
  var answer = '';
  var recurseThis = function(obj) {
    //if item isn't an object, that means it's a value, so i want that straight in.
    if (typeof obj === 'number') {
      answer += obj;
    }
    // this is the wrong basecase.
    // console.log(Object.is(obj));
    //if is an object. 
    if (typeof obj === 'object' && !Array.isArray(obj)) {
      each(obj, (item, key) => {
        answer += key
        recurseThis(item);
      });
    } else if (Array.isArray(obj)) {
      each( obj, (item, key) => {
        // answer += (`${item}`);
        if (key === 0) {
          answer += '[';
        }
        recurseThis(item);
      })
    }
  }
  
  recurseThis(obj);
  // if (isWhat(obj) === 'array') {
  //   answer = '['+answer+']';
  // }
  return answer;
  
};

module.exports = stringifyJSON;