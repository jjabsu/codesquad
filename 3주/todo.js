let inputBox = document.querySelector('#inputBox')
let inputBtn = document.querySelector('#inputBtn')
let ul = document.querySelector('#ul')

inputBtn.onclick = function() {

    let newBr = document.createElement('br');
    ul.appendChild(newBr);

    let newCheckBox = document.createElement('input');
    newCheckBox.type = 'checkbox'; //속성으로 타입넣기
    newCheckBox.classList.add("checkBox") //메소드로 클래스명 넣기
    ul.appendChild(newCheckBox);

    let toDo = inputBox.value;
    let newLi = document.createElement('LI');
    newLi.classList.add("li") //메소드로 클래스명 넣기
    newLi.innerHTML = toDo;
    ul.appendChild(newLi);

    let newBtn = document.createElement('BUTTON');
    newBtn.className = 'deleteBtn' //속성으로 클래스명 넣기
    newBtn.innerHTML = '지우기'
    ul.appendChild(newBtn)

    //체크박스 누르면 글자에 줄추가
    newCheckBox.onclick = function() {
        if (newLi.innerHTML === toDo) {
            newLi.innerHTML = '<del>' + toDo + '</del>'
        } else {
            newLi.innerHTML = toDo
        }
    }

    //지우기버튼 누르면 항목지우기
    // newBtn.onclick = function () {
    //     newCheckBox.remove();
    //     newLi.remove();
    //     newBtn.remove();
    // }


    function del() {
        newCheckBox.remove();
        newLi.remove();
        newBtn.remove();
    }

    newBtn.addEventListener("click", del)
}



/////////////