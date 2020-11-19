class Model { //입력하는 것만

    addText(target, input) {
        const textBox = document.createElement("div");
        textBox.append(input);
        target.append(textBox);
    }

    deleteEvent() {
        const target = this.parentNode;
        target.remove();
    }

}
class View { //버튼 만드는 것만

    addCheckBox(target) {
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        target.append(checkbox);
    }

    addDeleteButton(target, event) {
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "❌";
        deleteButton.addEventListener("click", event);
        target.append(deleteButton);
    }

}
class Controller {

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    input = document.querySelector("#input");
    addbtn = document.querySelector("#addbtn");
    list = document.querySelector("#list");
    delBtn = document.querySelector('#delbtn');

    init() {
        this.delBtn.addEventListener("click", this.model.deleteCheckedEvent)
        this.addbtn.addEventListener("click", this.addToDo.bind(this));
        this.input.addEventListener("keypress", e => {
            if (e.keyCode === 13)
                this.addbtn.click();
        });
    }

    addToDo() {

        this.list.append(this.createToDo());

        this.input.value = '';
        this.input.focus();
    }

    createToDo() {
        const toDo = document.createElement("div");
        toDo.classList.add("toDo");

        this.view.addCheckBox(toDo);

        this.model.addText(toDo, this.input.value);

        this.view.addDeleteButton(toDo, this.model.deleteEvent);


        return toDo;
    }
}

const model = new Model();
const view = new View();
const test = new Controller(model, view);
test.init();