Replace stringifyJSON with your own function in src/stringifyJSON.js, and make the specs pass.

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
