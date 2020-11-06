let newArr = [];

function calculate(num) {
    let multiple = 1;

    for (let i = 1; i <= num; i++) {
        multiple = multiple * i
        newArr.push(multiple)
    }
}

calculate(4);
console.log(newArr);



//재귀함수
function factorial(x) {
    if (x < 0) return;
    if (x === 0) return 1;
    return x * factorial(x - 1);
}

factorial(3);
// 6