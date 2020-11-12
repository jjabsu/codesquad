// let data = "[1]"
// let data = "]]1[["
let data = "[1,2,[3,4,[5,[6]]]]";
// let data = "[1,2,[3,4,[5,[6]]";

function check(data) {
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

        } else if (i === ']') { // ]이면 뺀다                 //   [[ ]]]] <- 이 경우
            if (!stack.pop()) { //뺄 값이 없으면
                console.log('불일치')
                return false;
            }

            // if (stack.pop() === '[') {
            //     depth--;
            // } else if (stack.pop() === undefined) {
            //     console.log('불일치')
            //     return
            // }

            // if (stack[stack.length - 1 === '[']) {
            //     stack.pop();
            //     depth--;
            // } else if (stack[stack.length - 1 === undefined]) {
            //     console.log('불일치')
            //     return
            // }
        }
    }


    if (stack.length !== 0) { //빼줬는데 [가 남았다면
        console.log('불일치')
    } else {
        return console.log(
            `깊이 수준은 ${maxDepth}이며, 총 ${valueArr.length}개의 원소가 포함되어 있습니다.`
        ); //병렬배열 처리못함
    }
}

check(data);