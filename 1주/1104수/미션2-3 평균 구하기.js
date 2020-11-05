let grades = [
    [88, 76, 77],
    [33, 44, 44],
    [90, 100, 94],
    [30, 44, 98]
];
/*
아래 예시는 네 명의 학생에 대한 과목 점수이다.

각 학생은 3가지 과목에 대한 점수를 가지고 있다.

각 학생의 평균점수(1)와 모든 학생의 최고점수의 평균점수(2)를 출력하라.
*/


function average() {
    let eachAv = [];

    for (let i = 0; i < grades.length; i++) {
        let sum = 0;
        for (let j = 0; j < grades[i].length; j++) {
            sum = sum + grades[i][j]
        }
        sum / grades[i].length
        eachAv.push(sum / grades[i].length);
    }
    console.log(eachAv) // 각 학생의 평균
}

average();

function highestAv() {
    for (let i = 0; i < grades.length; i++) {
        grades[i].sort(function(a, b) {
            return b - a;
        });

    }
}
highestAv();

function maxSumAv() {

    let maxSum = 0;

    for (let i = 0; i < grades.length; i++) {
        maxSum += grades[i][0]
    }

    return maxSum / grades.length
}

maxSumAv();

//각 배열을 높은 순서로 정렬
//첫번째값 뽑아서 평균