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

/////////////////////////////////////////////////////

let grades = [
    [88, 76, 77],
    [33, 44, 44],
    [90, 100, 94],
    [30, 44, 98]
];


// 배열 원소들의 평균값 구하는 함수
function average(arr) {
    const sum = arr.reduce((prev, curr) => prev + curr);
    return sum / arr.length;
}

// 각 학생의 평균 점수 배열
let getAverageGrade = grades.map(average);
// [80.33333333333333, 40.333333333333336, 94.66666666666667, 57.333333333333336]

// 각 학생들의 가장 높은 점수들의 배열
let highestGrade = grades.map((item) => {
    item.sort((a, b) => b - a);
    return item[0];
});

// let highestGrade = grades.map(function (item) {
//     item.sort(function (a, b) {
//         return b - a;
//     })
//     return item[0];
// })

console.log(getAverageGrade);
console.log(average(highestGrade));