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

