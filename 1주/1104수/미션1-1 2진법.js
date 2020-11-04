/*
//0부터 4개의 숫자까지 한글자씩 차례대로 말한다고 가정
0    //0  a           
1    //1  b
10   //2  a b
11   //3  a b 
100  //4  a b a 
101  //5  
110  //6  
111  //7  
1000 //8  
1001 //9  
~~
*/

//if 4개의 숫자까지 2명이 말한다면 // 0~7
//if 5개의 숫자까지 3명이 말한다면 // 0~14                            
//10진법을 2진법으로 바꿀때 toString(2);

let newArr = [];

function solution(base, digit, people) {
    let num = (digit - 1) * people
    for (let i = 0; i < num; i++) {
        binarySytem = i.toString(base) //문자열
        newArr.push(binarySytem)
    }
}

solution(2, 5, 3)
console.log(newArr)

//3명이 하는 게임에서 홍길동의 차례에 어떤 숫자를 말해야 하는지를 알 수 있는 프로그램을 만든다.
function order(p) {
    for (let i = 0; i < newArr.length; i++) {
        newArr
    }
}