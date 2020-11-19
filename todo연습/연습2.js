// JS로 HTML 다루기
const title = document.getElementById("title")
    //HTML에서 엘리먼트선택
    //document 객체
    //getElementById 키:function

// const title = document.querySelector("#title")
title.innerHTML = ""
    // title.style.color = "red";

const BASE_COLOR = "red";
const OTHER_COLOR = "blue";

function handleClick(e) { //e는 event객체 
    // debugger //e객체 안에 target이 무엇을 가리키는지 확인
    if (e.target.style.color === BASE_COLOR) {
        // e.target은 클릭한 element
        e.target.style.color = OTHER_COLOR
    } else {
        e.target.style.color = BASE_COLOR
    }
}
////////////////////////////////////////////////////
// const ClICKED_CLASS = "clicked"

// function handleClick() {
//     //클래스네임 하나만 체크가능
//     if (title.className !== ClICKED_CLASS) { //e.target 안 쓰고 그냥 title바로써줌
//         title.className = CLICKED_CLASS;
//     } else {
//         title.className = "";
//     }
// }

// function handleClick(e) {
//     //contains쓰면 여러개 체크가능
//     const hasClass = e.target.classList.contains(ClICKED_CLASS)
//     if (!hasClass) {
//         // e.target은 클릭한 element
//         e.target.classList.add(ClICKED_CLASS)
//     } else {
//         e.target.classList.remove(ClICKED_CLASS)
//     }
// }

// function handleClick(e) {
//     e.target.classList.toggle(ClICKED_CLASS)
// }

title.addEventListener("click", handleClick)