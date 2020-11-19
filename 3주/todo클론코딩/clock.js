const clock = document.querySelector(".clock")
const clockTitle = clock.querySelector("h1")

// const clock = document.querySelector(".clock"),
//     clockTitle = clock.querySelector("h1")


function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:
    ${minutes < 10 ? `0${minutes}` : minutes}:
    ${seconds < 10 ? `0${seconds}` : seconds}`
}

function init() {
    getTime();
    setInterval(getTime, 1000)
}

init();

/*
setInterval(fn, 1000) //시간마다 함수 실행
*/