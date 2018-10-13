# TEST SUITE

node testsite.js to run tests
OR
npm run tryit


# Replace stringifyJSON with your own function in src/stringifyJSON.js, and make the specs pass.

//inputs
[1, 2, [3, 4]]
'[1,2,[3,4]]'
[1,2,3,4]
{a:1, a:2, a:3}
'{"a":1,"b":2,"c":3}'

[1,2,{a: 1}]
'[1,2,{"a":1}]'

+ check if array or object
+ Order of results:
```js
 ']', '}', '1', ':', '"', 'a', '"', '{', ',', '2', ',', '1', '['

//f [1,2]
//b [2,1]
//forwards   [1,2,{"a":1}]
 //backwards  ]}1:"a"{,2,1[

// this is the same as the recursively flatten an array problem , only with the added wringle of adding the brackets a strings. so base case would be if x.length doesn't exist, add the []
//if item isnt' an object don't recurse.
```
//split up the behaviros, decision tree
//is array, object or value?
//array call recursion and add to answer, object do this call recursion and parse before adding to answer, value add to answer.

//hand it off 


Implement getElementsByClassName with your own function in src/getElementsByClassName.js, and make the specs pass.

You should use 
document.body, element.childNodes, and element.classList

Get a collection of the <body> element's child nodes:

var c = document.body.childNodes;

bodyNodes[4].classList.value
>> super ERRor

bodyNodes[5].classList.value
"joop jorp"
//but not what i want cuz a text string is too much. contains is much better.

bodyNodes[5].classList.contains('joop'); >> true

bodyNodes[4].classList
>>undefined
bodyNodes[4]
>>#text (not an element)
