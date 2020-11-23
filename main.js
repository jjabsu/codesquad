// SET TIMEOUT (IN MILISECONDS).
var hide;
var target;

function showmenu(el) {
    target = document.getElementById(el);

    if (target) target.style.display = 'none';
    target.style.display = 'block';
}

// SET TIME TO HIDE MENU LIST.
function setTimeToHide() {
    hide = setTimeout(function() {
        if (target) target.style.display = 'none';
    }, 100);
}

function ReSetTimer() {
    if (hide) {
        clearTimeout(hide);
        hide = 0;
    }
};