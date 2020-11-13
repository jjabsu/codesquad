//올바른 데이터 check & value
function checkArr(str) {
    const stack = [];
    const value = [];
    let maxDepth = 0;
    let depth = 0;

    for (let x of str) {
        if (x === "[") {
            stack.push("[");
            depth++;
            maxDepth = maxDepth < depth ? depth : maxDepth;
        } else if (x === "]") {
            if (stack.pop() === "[") {
                depth--;
            } else {
                console.log("잘못된 정보입니다.");
                return;
            }
        } else {
            value.push(x);
        }
    }
    if (stack.length) {
        console.log("잘못된 정보입니다.");
        return;
    } else {
        console.log(
            `깊이 수준은 ${maxDepth}이며, 총 ${value.length}개의 원소가 포함되어 있습니다.`
        );

        return;
    }
}