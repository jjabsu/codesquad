let data = "[1,[2],[3],4,[[6]]]"
const stack = [];
const value = [];
let maxDepth = 0;
let depth = 0;


for (let i of data) {
    if (i === "[") {
        stack.push("[");
        depth++;
        maxDepth = maxDepth < depth ? depth : maxDepth;
        console.log(maxDepth + '찾기1')
        console.log(depth + '찾기1')

    } else if (i === "]") {
        if (stack.pop() === "[") {
            depth--;
        } else {
            console.log("잘못된 정보입니다.");
            break;
        }
    } else if (i !== ',' && i !== '[' && i !== ']') {
        value.push(i);
    }

}

if (stack.length) {
    console.log("잘못된 정보입니다.");

} else {
    console.log(
        `깊이 수준은 ${maxDepth}이며, 총 ${value.length}개의 원소가 포함되어 있습니다.`
    );

}