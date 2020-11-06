const tree = require('./미션2-5.js')

let list = [];

function findValues(obj) {

    for (let i in obj) {
        if (obj[i].type == "sk") { //parent node 탐색
            list.push(obj[i].name);
        }
        if (obj[i].childnode.length !== 0) { //child node를 탐색
            findValues(obj[i].childnode); //재귀 //findValues에 obj대신 obj[i] 넣고 함수실행
        }
    }
}
findValues(data);
console.log(list);