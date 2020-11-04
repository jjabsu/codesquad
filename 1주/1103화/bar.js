//bar.js
const foo = require('./foo.js') //foo.js, bar.js는 같은 디렉토리.
console.log(foo.a)

// var require = function(src){                 //line 1
//     var fileAsStr = readFile(src)            //line 2
//     var module.exports = {}                  //line 3
//     eval(fileAsStr)                          //line 4
//     return module.exports                    //line 5
// }