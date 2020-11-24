let title = document.querySelector("#title")
let list = document.querySelector("#list")
let consoleBox = document.querySelector("#consoleBox")
let hide;

function showMenu() {
    if (list.style.display === 'none') {
        list.style.display = 'block';
    }
}

function hideMenu() {
    hide = setTimeout(function () {
        if (list.style.display = 'block') {
            list.style.display = 'none';
        }
    }, 1000);
}

function reset() {
    clearTimeout(hide);
};

title.addEventListener("mouseover", showMenu)
title.addEventListener("mouseout", hideMenu)

list.addEventListener("mouseover", reset)
list.addEventListener("mouseout", hideMenu)




let fruitObj = {};

//데이터
addData = (item) => {
    if (!fruitObj.hasOwnProperty(item)) {
        fruitObj[item] = 1; //없으면 1
    } else {
        fruitObj[item]++; // 있으면 더해주기
    }
}

//핸들러

let timer;

mouseMoveHandler = (event) => {
    if (!timer) {
        timer = window.setTimeout(() => {
            moveToAddData(event);
            timer = null;
        }, 500);
    }
}

//마우스 움직이면 addData 실행 및 showData실행
moveToAddData = (event) => {
    if (event.target.tagName === 'LI') {
        addData(event.target.innerHTML); //innerHTML에 넣어줌
        this.showData();
    }
}

//보여주기
showData = () => {
    const template = Object.keys(fruitObj).map(curr =>
        `<li> ${curr} : ${fruitObj[curr]} </li>`
    ).join('');
    consoleBox.innerHTML = template;
}

list.addEventListener("mousemove", mouseMoveHandler)


