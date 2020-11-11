// 별 찍기(1)
let num = 5

result = '';

for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
        result += '*';
    }
    result += '\n';
}

// OX퀴즈
let num = 5;

for (let i = 1; i <= num; i++) {
    let count = 0;
    let sum = 0;

    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === 'O') {
            count++;
        } else {
            count = 0;
        }
        sum += count;
    }
    console.log(sum);
}

//음계
let ascending = 0;
let descending = 0;

let input = ? ? ?

    for (let i = 0; i < input.length - 1; i++) {
        if (input[i] - input[i + 1] === -1) {
            ascending++;
        } else if (input[i] - input[i + 1] === 1) {
            descending++;
        }
    }

if (ascending === 7) {
    console.log('ascending');
} else if (descending === 7) {
    console.log('descending');
} else {
    console.log('mixed');
}

//아스키 코드
let str = a;

str.toString().charCodeAt(0);