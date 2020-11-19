const toDoForm = document.querySelector(".toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".toDoList"); //ul

const TODOS_LS = "toDos";
const toDos = [];

//❌버튼 눌렀을때
function deleteToDo(e) {
    const btn = e.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
}

//LS에 저장
function saveToDo() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //로컬스토리지는 string으로 저장함 그래서 toDos 스트링으로 바꿔줌
}

//
function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = '❌';
    delBtn.addEventListener("click", deleteToDo);
    span.innerHTML = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId; //li에 아이디 추가
    toDoList.appendChild(li); //ul에 붙임

    const toDoObj = {
        text: text, //앞에 text는 키값 (이 값은 파라매터와 관계x)
        id: newId //앞에 id는 키값(이 값은 파라매터와 관계x) 
    };
    toDos.push(toDoObj);
    saveToDo(); //push 후에 save
}

//form에 엔터칠 때 
function handleSubmit(event) {
    event.preventDefault(); //공부해볼것 버블링
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = '';
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS); //키밸류로 저장
    if (toDos !== null) {

    } else {
        const parsedToDos = JSON.parse(loadedToDos);

        parsedToDos.forEach(function(curr) {
            paintToDo(curr.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();