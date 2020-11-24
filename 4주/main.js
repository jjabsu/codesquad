
let target;
let hide;

let title = document.querySelector("#title")
let list = document.querySelector("#list")

function showmenu() {
    target = document.getElementById("list")
    if (target.style.display === 'none') {
        target.style.display = 'block';
    }
}

function setTimeToHide() {
    hide = setTimeout(function () {
        if (target.style.display = 'block') {
            target.style.display = 'none';
        }
    }, 1900);
}

function ReSetTimer() {
    clearTimeout(hide);
};

title.addEventListener("mouseover", showmenu)
title.addEventListener("mouseout", setTimeToHide)


list.addEventListener("mouseover", ReSetTimer)
list.addEventListener("mouseout", setTimeToHide)

