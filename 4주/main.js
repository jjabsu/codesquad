let title = document.querySelector("#title")
let list = document.querySelector("#list")

function showmenu() {
    if (list.style.display === 'none') {
        list.style.display = 'block';
    }
}

function hidemenu() {
    setTimeout(function () {
        if (list.style.display = 'block') {
            list.style.display = 'none';
        }
    }, 1000);
}

function reset() {
    clearTimeout(hidemenu);
};

title.addEventListener("mouseover", showmenu)
title.addEventListener("mouseout", hidemenu)


list.addEventListener("mouseover", reset)
list.addEventListener("mouseout", hidemenu)

