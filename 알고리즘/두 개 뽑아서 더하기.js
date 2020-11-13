function solution(numbers) {
    let answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j) {
                const sum = numbers[i] + numbers[j];
                if (answer.indexOf(sum) === -1) { // 없으면 넣어준다.
                    answer.push(sum)
                }
            }
        }
    }
    return answer.sort((a, b) => a - b)
}