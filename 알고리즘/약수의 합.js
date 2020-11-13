//약수란 나누었을 때 나머지가 0

function solution(n) {
    var answer = 0;

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            sum = sum + i
        }
    }

    answer = sum;

    return answer;
}