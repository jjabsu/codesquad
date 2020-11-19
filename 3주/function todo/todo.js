let inputBox = document.querySelector('#inputBox')
let inputBtn = document.querySelector('#inputBtn')
let ul = document.querySelector('#ul')

inputBtn.onclick = function () {

    //br
    let newBr = document.createElement('br');
    ul.appendChild(newBr);

    //체크박스
    let newCheckBox = document.createElement('input');
    newCheckBox.type = 'checkbox';
    newCheckBox.classList.add("checkBox")
    ul.appendChild(newCheckBox);

    //ul에 li태그로 todo넣어주기
    let toDo = inputBox.value;
    let newLi = document.createElement('LI');
    newLi.classList.add("li")
    newLi.innerHTML = toDo;
    ul.appendChild(newLi);
    toDo.innerHTML = '';
    
    //지우기 버튼 
    let newBtn = document.createElement('BUTTON');
    newBtn.className = 'deleteBtn'
    newBtn.innerHTML = '지우기'
    ul.appendChild(newBtn)

    //체크박스 누르면 글자에 줄추가
    newCheckBox.onclick = function () {
        if (newLi.innerHTML === toDo) {
            newLi.innerHTML = '<del>' + toDo + '</del>'
        } else {
            newLi.innerHTML = toDo
        }
    }

    //지우기 
    // newBtn.onclick = function () {
    //     newCheckBox.remove();
    //     newLi.remove();
    //     newBtn.remove();
    // }

    //지우기 //addEventListener
    function del() {
        newBr.remove();
        newCheckBox.remove();
        newLi.remove();
        newBtn.remove();
    }
    newBtn.addEventListener("click", del)
}