// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  //base case
  //This is a permuation problem.
  //
  //for all nodes in document.body
  //if node has childNodes do this recursion.
  //else push it the up top and next!

    var answerArr = [];
    const bodyNodes = document.body.childNodes;
    for (let i = 0; i < bodyNodes.length; ++i) {
        //intrinsic problem lies in how to count downn when only the classname is involved.
        if (bodyNodes[i].hasChildNodes()) {
            answer.concat( getElementsByClassName(className) );
        } else {
            if (bodyNodes[i].classList.value.indexOf(className) > -1) {
                answerArr.push(bodyNodes[i]);
            }
        }
    }
    return answerArr;
};
