// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
const {each, parse, assertEquals, isWhat} = require('../test.js');

var stringifyJSON = function(obj) {
  // your code goes here
  var answer = '';
  var flag = false;

  var recurseThis = function(obj) {
    //if item isn't an object, that means it's a value, so i want that straight in.

    if (typeof obj === 'number') {
      answer += obj;
      answer += ' ';

      // if (flag === true) {
      //   // answer += obj;
      //   answer += ']';
      //   flag = false;
      // }
   
    
    }
   
    // this is the wrong basecase.
    // console.log(Object.is(obj));
    //if is an object. 
    if (isWhat(obj) === 'object') {
      each(obj, (item, key) => {
        answer += `"${key}":`;
        recurseThis(item);
      });
    } 
    if (Array.isArray(obj)) {
      each( obj, (item, key) => {

        // answer += (`${item}`);
        if (key === 0) {
          answer += '[';
        }
        recurseThis(item);

        if (key === obj.length-1) {
          answer = answer + '] ';
          answer = answer.trim();

        } 

      })
    }
  }
  recurseThis(obj);
  // answer = answer.slice(0,-1);
  // if (isWhat(obj) === 'array') {
  //   answer = answer+']';
  // }
  
  if (isWhat(obj) === 'object') {
    answer = '{'+ answer;
    answer = answer+ '}';
  }
  var dart = answer.lastIndexOf(' ');
  answer = answer.substring(0,dart)+answer.substring(dart+1,answer.length);
  console.log(answer+'!');
  return answer.replace(/ /g,',');
};

module.exports = stringifyJSON;