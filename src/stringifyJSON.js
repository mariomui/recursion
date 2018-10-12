// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
const {each, parse, assertEquals} = require('../test.js');

var answer = '';
var stringifyJSON = function(obj) {
  // your code goes here
  if ( Array.isArray(obj)) {
    answer+=1;
  }
  if ( !Array.isArray(obj) && Object.is(obj)) {

  }
  // each( obj, item => {
  //   if (Object.is(item))
  //     var recurseThis = function(item) {
      
  //     }
  // }
  
  
};

