var hide;
var target;

function showmenu(el) {
    target = document.getElementById(el);
    if (target) target.style.display = 'none';
    target.style.display = 'block';
}

function setTimeToHide() {
    hide = setTimeout(function () {
        if (target) target.style.display = 'none';
    }, 100);
}

function ReSetTimer() {
    clearTimeout(hide);
};