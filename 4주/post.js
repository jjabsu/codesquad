/*
let a = [];

let b = a[0] = [];

let c = a[0][0] = [];

let d = a[0][1] = ["p"];
*/

let village = [];

function createVillage() {
    let num = Math.floor(Math.random() * 10)
    for (let i = 0; i < num; i++) {
        village.push(i);
    }
};

function createPostbox() {
    let num = Math.random();
    if (num >= 0.6) return true;
    else return false;
}

createVillage();
createPostBox();

function createEl(arr, parentEl) {

    for (let i = 0; i < arr.length; i++) {
        let div = document.createElement('div');
        div.innerText = arr[i]
        div.classList.add('town');
        parentEl.appendChild(div);
    }
}

function createEl(arr, parentEl) {

    for (let i = 0; i < arr.length; i++) {

        let el = document.createElement('div');
        el.innerText = arr[i].name;
        el.classList.add('town');
        parentEl.appendChild(el);

        if (arr[i].postbox) {
            el.classList.add('postbox');
            postboxEls.push(el);

        }
    }
    return parentEl.children;
}

















/////////////////////////////////////////
function traverse(target, callback) {
    if (target.nodeType === 1) {
        //if(target.nodeName === 'A')
        callback(target);

        var c = target.childNodes;
        for (var i = 0; i < c.length; i++) {
            traverse(c[i], callback);
        }
    }
}

traverse(document.getElementById('start'), function (el) {
    console.log(el);
});