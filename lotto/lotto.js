'use stirct';

let my = document.querySelector("#my")
let luck = document.querySelector("#luck")

let totalCount = document.querySelector("#totalCount")

let rank1 = document.querySelector("#rank1")
let rank2 = document.querySelector("#rank2")
let rank3 = document.querySelector("#rank3")
let rank4 = document.querySelector("#rank4")
let rank5 = document.querySelector("#rank5")
let rank6 = document.querySelector("#rank6")

let profit = document.querySelector("#profit")
let loss = document.querySelector("#loss")
let sum = document.querySelector("#sum")


//당첨금
let winner1_price = 2000000000;
let winner2_price = 70000000;
let winner3_price = 1500000;
let winner4_price = 50000;
let winner5_price = 5000;

//1등 집계용
let winner1_total = 0;
let winner1_count = 0;
//2등 집계용
let winner2_total = 0;
let winner2_count = 0;

//3등 집계용
let winner3_total = 0;
let winner3_count = 0;

//4등 집계용
let winner4_total = 0;
let winner4_count = 0;

//5등 집계용
let winner5_total = 0;
let winner5_count = 0;

//꽝 집계용
let loser_count = 0;

//총 게임횟수
let count = 0;

//총 당첨금액
let total = 0;


//이번주 번호
let week = document.querySelector("#week")
let btn = document.querySelector("#btn")
let lucky = [];

btn.onclick = function () {

    let luckyNum = week.value.split(", ")
    lucky = luckyNum.map(function (e) {
        return Number(e)
    })
    luck.innerHTML = `이번주 번호: ${lucky}`;
}



// let lucky = [2, 3, 6, 29, 31, 27];
// let bonus = [46]

//내가 뽑은 번호
let myLotto = [];
let checkNum = [];


function pickNum() {
    let i = 0;
    while (i < 6) {
        let n = Math.floor(Math.random() * 45) + 1;
        if (!isSameNum(n)) { //같지않으면 
            myLotto[i] = n;
            i++;
        }
    }
    count++
    return myLotto;
}


function isSameNum(n) {
    for (let i = 0; i < myLotto.length; i++) {
        if (n === myLotto[i]) { //숫자랑 lotto배열의 숫자랑 비교해서 같으면 true
            return true;
        }
    }
    return false; //같지않으면 false
}

function checkLotto() {
    checkNum = lucky.filter(function (e) {
        return myLotto.includes(e);
    })

    return checkNum;
}



function print(array) {
    // luck.innerHTML = `이번주 번호:    ${lucky}`;
    my.innerHTML = `뽑은 숫자:    ${myLotto}`;
    totalCount.innerHTML = `총 게임횟수:    ${count}`;

    if (array.length === 3) {
        winner5_count++
        winner5_total += winner5_price;
        total += winner5_price;
        rank5.innerHTML = `5등 당첨횟수: ${winner5_count} <br>내 번호: ${myLotto} <br> 일치하는 숫자: ${checkNum} <br> 확률:  ${((winner5_count / count) * 100).toFixed(4)}%`

    } else if (array.length === 4) {
        winner4_count++
        winner4_total += winner4_price;
        total += winner4_price;
        rank4.innerHTML = `4등 당첨횟수: ${winner4_count} <br>내 번호: ${myLotto} <br> 일치하는 숫자: ${checkNum} <br> 확률:  ${((winner4_count / count) * 100).toFixed(4)}%`

    } else if (array.length === 5) {
        winner3_count++
        winner3_total += winner3_price;
        total += winner3_price;
        rank3.innerHTML = `3등 당첨횟수: ${winner3_count} <br>내 번호: ${myLotto} <br> 일치하는 숫자: ${checkNum} <br> 확률:  ${((winner3_count / count) * 100).toFixed(4)}%`
    }
    else if (array.length === 6) {
        winner1_count++
        winner1_total += winner1_price;
        total += winner1_price;
        rank1.innerHTML = `1등 당첨횟수: ${winner1_count} <br>내 번호: ${myLotto} <br> 일치하는 숫자: ${checkNum} <br> 확률:  ${((winner1_count / count) * 100).toFixed(4)}%`
        clearTimeout(start)
    } else {
        loser_count++;
        rank6.innerHTML = `꽝!!!   <br> 꽝횟수:   ${loser_count}  <br>내 번호: ${myLotto} <br> 일치하는 숫자의 갯수:  ${checkNum.length} <br> 확률:  ${((loser_count / count) * 100).toFixed(4)}%`
    }

    profit.innerHTML = `수익:    ${total.toLocaleString()}원`
    loss.innerHTML = `손실:    ${(count * 1000).toLocaleString()}원`
    sum.innerHTML = `합계(당신이 낸 세금):    ${(total - (count * 1000)).toLocaleString()}원<br>`
}


let game = document.querySelector("#game")
let gameOver = document.querySelector("#gameOver")
let man = document.querySelector("#man")


function main() {
    pickNum();
    let result = checkLotto();
    print(result)
}

let start;

game.onclick = function () {
    start = setInterval(main, 100)
}
gameOver.onclick = function () {
    clearTimeout(start)
}

man.onclick = function () {
    for (let i = 0; i < 10000; i++) {
        main();
    }
}