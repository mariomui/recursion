// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
    // your code here
    //last part of the tree is when there are no more elements in body.
    //body.childNodes[i] = body.childNodes[3] (lets say.)
    //
    var answerArr = [];
    var body = document.body;

    var recurse = function (body) {
        if (body.classList && body.classList.contains(className)) {
            //last part of the tree is element that i find in the element 3.
            //this time i get an empty array. debug time.
            console.log()
            answerArr.push(body);
        }
        if (body.hasChildNodes()) {
            for (var i = 0; i < body.length - 1; ++i) {
                recurse(body.childNodes[i]);
            }
        }
    }
    recurse(body); //necessary to call it. otherwise it's just a function expression.
    return answerArr;
};
