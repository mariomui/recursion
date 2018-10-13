// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var isWhat = function (target) {
  if (typeof target === 'object' && target != null) {
      if (Array.isArray(target)) {
          return 'array';
      }
      return 'object';
  } 
  if (typeof target === 'number') {
      return 'number';
  }
  if (typeof target === 'string') {
      return 'string';
  }
  if (target == null) { 
      return 'null';
  }
  if (typeof target == 'boolean') {
      return 'boolean';
  }

  
}
//=======================================
// const {assertEquals, isWhat} = require('../test.js');
var each = (collection, callback) => {
  if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection);
      }
  } else {
      for (var key in collection) {
          callback(collection[key], key, collection);
      }
  }
}
//=====================================

//====main function=======
var stringifyJSON = function(objUndead) {
  //from my readme
  var answer ='';
  var delim = ',';
  //if type is array
  //loop through each one and make it stringy.
  //each item in the array can be a character, #, bool, null or er..let's just do these first.
  if (isWhat(objUndead) === 'string') {
    // if (objUndead === 'functions') return '';
    // if (objUndead === 'undefined') return '';
    return `"${objUndead}"`; //stop forgetting that this is recursion. i'm renaming objUndead.
  }
  if (isWhat(objUndead) === 'number') {
    return `${objUndead}`;
  }

  if (isWhat(objUndead) === 'boolean') {
    return objUndead.toString();
  }
  if ( objUndead == null) {
    return 'null';
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
      // console.log(currKey+'!!!KEY');
      // console.log(objUndead);
      // if (objUndead[currKey] !== "functions" || objUndead[currKey] !== "undefined") {
        delim = (i === arrKey.length - 1) ? '' : ',';

        // var joob = `${convertTo(currKey)}:${convertTo(objUndead[currKey])}`;
        // answer += `${stringifyJSON(joob)}${delim}`;
      // if (currKey !== 'undefined') {
        if (currKey !== "functions" && currKey !== 'undefined') {
          answer += `${stringifyJSON(currKey)}`;
          answer += ':';
          answer += `${stringifyJSON(objUndead[currKey])}`;
          answer += delim;
        } else answer += '';
      // }
      // }

    }
      
     
  
    answer += '}';
    // console.log(answer+'!!!!');
  }
  //if type is objUndeadect
  
  
  //if type is anything else.
  
  return answer;
};

module.exports = stringifyJSON;