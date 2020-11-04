// 임의의 숫자(m)를 입력받아 1부터 m까지의 factorial 값을 배열로 담아서 반환하는 함수 만들기.

let multiple = 1

function calculate(num) {
    for (let i = 1; i <= num; i++) {
        multiple = multiple * i
    }
    return multiple
}

calculate(4);
