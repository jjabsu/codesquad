// let data = "[1]"
// let data = "]]1[["
// let data = "[1,2,[3,4,[5,[6]]]]";
let data = "[1, [2], [3]]"
    // let data = "[1,2,[3,4,[5,[6]]";

let dataArr = data.split('');

let braceArr = dataArr.filter(function(item) {
    return item === '[' || item === ']';
});

let valueArr = dataArr.filter(function(item) {
    return item !== ',' && item !== '[' && item !== ']'
});

let stack = []; //데이터 담아놓음
let maxDepth = 0;
let depth = 0;



for (let i of braceArr) {

    if (i === '[') { // [이면 넣는다
        stack.push(i);
        depth++;
        maxDepth = maxDepth < depth ? depth : maxDepth;
        console.log(maxDepth + '찾기1')
        console.log(depth + '찾기1')

    } else if (i === ']') { // ]이면 뺀다                 //   [[ ]]]] <- 이 경우
        depth--;
        if (!stack.pop()) { //뺄 값이 없으면
            console.log('불일치')
            break;
        }

        // if (stack.pop() === "[") {
        //     depth--;
        // } else {
        //     console.log("잘못된 정보입니다.");
        //     break;
        // }

        // if (stack.pop() === '[') {
        //     depth--;
        // } else if (stack.pop() === undefined) {
        //     console.log('불일치')
        //     break;
        // }

        // if (stack[stack.length - 1 === '[') {
        //     stack.pop();
        //     depth--;
        // } else if (stack[stack.length - 1 === undefined]) {
        //     console.log('불일치')
        //     break;
        // }
    }


    if (stack.length !== 0) { //빼줬는데 [가 남았다면
        console.log('불일치')
    } else {
        console.log(
            `깊이 수준은 ${maxDepth}이며, 총 ${valueArr.length}개의 원소가 포함되어 있습니다.`
        ); //병렬배열 처리못함
    }
}