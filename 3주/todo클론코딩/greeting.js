const form = document.querySelector(".form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".greeting")

const USER_LS = "currentUser",
    SHOWING_CN = "showing"

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    paintGreeting(input.value);
    saveName(input.value)
}

function askForName() {
    form.classList.add(SHOWING_CN)
    form.addEventListener("submit", handleSubmit)
}


function paintGreeting(text) {
    form.classList.remove(SHOWING_CN)
    greeting.classList.add(SHOWING_CN)
    greeting.innerHTML = `Hello ${text}`
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) { //없으면
        askForName();
    } else { //있으면
        paintGreeting(currentUser);
    }
}


function init() {
    loadName();
}

init();