// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
const {each, parse, assertEquals} = require('../test.js');

var answer = '';
var stringifyJSON = function(obj) {
  // your code goes here
  var answer = '';
  var recurseThis = function(obj) {
    //if item isn't an object, that means it's a value, so i want that straight in.
    if (typeof obj !== 'object') {
    }
    // console.log(Object.is(obj));
    //if is an object. 
    if (typeof obj === 'object') {
      each(obj, (item, key) => {
        answer += parse(item,key);
        recurseThis(item);
      });
    }
  }
  recurseThis(obj);
  return answer;
  
};

module.exports = stringifyJSON;