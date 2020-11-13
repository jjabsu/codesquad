function solution(answers) {
    let person1 = [1, 2, 3, 4, 5];
    let person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let score1 = 0;
    let score2 = 0;
    let score3 = 0;

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === person1[i % 5]) score1++;
        if (answers[i] === person2[i % 8]) score2++;
        if (answers[i] === person3[i % 10]) score3++;
    }

    var max = Math.max(score1, score2, score3);

    var answer = [];
    if (max === score1) {
        answer.push(1);
    }
    if (max === score2) {
        answer.push(2);
    }
    if (max === score3) {
        answer.push(3);
    }

    return answer;
}