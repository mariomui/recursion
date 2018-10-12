// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
    //last part of the tree is when there are no more elements in body.
    //body.childNodes[i] = body.childNodes[3] (lets say.)
    //
    var answerArr = [];
    var bodyNodes = document.body;
    console.log(bodyNodes, bodyNodes.childElementCount);
    //looping 4 times but i have at least 5 elements.
    var recurseThis = function (bodyNodes) {
        //this recursion is stopping early.
        if ( bodyNodes.classList && bodyNodes.classList.contains(className) ) {
            console.log("hello");
            //this part isnt registering at all.
            // console.log(bodyNodes);
            answerArr.push(bodyNodes);
        }         
        if ( bodyNodes.hasChildNodes() ) {
            //this should do it first.
            //the block inside here does run.
            //nope that doesn't maek sense either.
            // _.each(bodyNodes.childNodes, item => {
            for (var i = 0; i < bodyNodes.childNodes.length; i++) {

                recurseThis(bodyNodes.childNodes[i]);
            }
            // })
            
        } 
        
    }
    recurseThis(bodyNodes); //necessary to call it. otherwise it's just a function expression.
    return answerArr;
};
