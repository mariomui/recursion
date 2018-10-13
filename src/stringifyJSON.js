// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
const {each, parse, assertEquals, isWhat,convertTo} = require('../test.js');

var stringifyJSON = function(objUndead) {
  //from my readme
  var answer ='';
  var storageA = [];
  var delim = ',';
  //if type is array
  //loop through each one and make it stringy.
  //each item in the array can be a character, #, bool, null or er..let's just do these first.
  if (isWhat(objUndead) === 'string') {
    return objUndead; //stop forgetting that this is recursion. i'm renaming objUndead.
  }
  if (isWhat(objUndead) === 'number') {
    return `${objUndead}`;
  }
  
  if (isWhat(objUndead) === 'array') {
    answer += '[';
    each(objUndead, (item, key) => {
      if (key === objUndead.length-1) {
        delim = '';
      } else {
        delim = ',';
      }
      answer += `${stringifyJSON(item)}${delim}`; //diarrhea.->

    });
    answer += ']';
  }

  if (isWhat(objUndead) === 'object') {
    var arrKey = Object.keys(objUndead);
    answer += '{';
    //all this to check if the last key is the last key.
    for (var i = 0; i < arrKey.length; i++) {
      
      const currKey = arrKey[i];
      delim = (i === arrKey.length-1) ? '' : ',';

      var joob = `${convertTo(currKey)}:${convertTo(objUndead[currKey])}`;
      answer += `${stringifyJSON(joob)}${delim}`;
    }
      
     
  
    answer += '}';
  }
  //if type is objUndeadect
  
  
  //if type is anything else.
  return answer;
};

module.exports = stringifyJSON;