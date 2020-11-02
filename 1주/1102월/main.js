
console.log('hello world')

let newArr = [];


function getArea(name, a, b, c) {
    if (name === 'circle') {
        newArr.push(name, a * a * 3.14)
        return a * a * 3.14
    } else if (name === 'rect') {
        newArr.push(name, a * b)
        return a * b
    } else if (name === 'trapezoid') {
        newArr.push(name, (a + b) / 2 * c)
        return (a + b) / 2 * c
    } else if (name === 'sumCircle') {
        let sum = 0;
        for (let a = 1; a <= b; a++) {
            sum = sum + (a * a * 3.14)
        }
        newArr.push(name, sum)
        return sum;
    }
}


getArea('circle', 10);
console.log(getArea('circle', 10))

getArea('rect', 10, 15);
console.log(getArea('rect', 10, 15))

getArea('trapezoid', 10, 15, 12);
console.log(getArea('trapezoid', 10, 15, 12))

getArea('sumCircle', 1, 3);
console.log(getArea('sumCircle', 1, 3))

//printExecutionSequence
//순서 출력


function printExecutionSequence() {
    for (let i = 0; i < newArr.length; i++) {
        console.log(newArr[i])
    }
}

printExecutionSequence();

console.log(printExecutionSequence())