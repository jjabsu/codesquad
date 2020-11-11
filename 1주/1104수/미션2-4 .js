const data = require('./미션2-4.js')

const list = []

function findNumber(obj) {

    for (const i in obj) { //객체 돌면서 키값 검색
        if (typeof(obj[i]) === 'number') {
            list.push(i) //넘버랑 일치하면 넣어줌
        } else if (typeof(obj[i]) === 'object') {
            findNumber(obj[i]); //넘버랑 일치하지않는것들은 다시한번
        }
    }
}

findNumber(data)
console.log(list)

/////////////////////////////////////////////////////

let arr = [];

for (let obj in data) {
    for (let key in data[obj]) {
        if (typeof data[obj][key] === 'number')
            arr.push(key);
    }
}
console.log(arr);