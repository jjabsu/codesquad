// input => function => output

// API가 뭐야?

function printHello() {
    console.log('hello')
}

printHello();

function log(message) {
    console.log(message)
}

log('hello')

// 2. parameter
function changeName(obj) {
    obj.name = 'coder'
}

const ellie = { name: 'ellie' }
changeName(ellie);
console.log(ellie)

// 3. default parameter
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`)
}
showMessage('hi!');

// 4. rest parameter
function printAll(...args) { //인자가 배열형태로 전달됨
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    for (let arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => { console.log(arg) });
}

printAll('dream', 'coding', 'ellie') //인자 여러개

//함수도 object다

// 5. local scope

// 6. return

// 7. early return, early exit
// bad
function upgrade(user) {
    if (user.point > 10) {
        //upgrade
    }
}

// good
function upgrade(user) {
    if (user.point <= 10) {
        return
    }
    //upgrade
}

//함수 선언식은 호이스팅 o 
function name() {
    //
}
//함수 표현식은 호이스팅 x
var name = function () {
    //
};


// 8. callback
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () {
    console.log('yes!')
}

const printNo = function () {
    console.log('no!')
}

randomQuiz('love you', printYes, printNo)

// 9. arrow function

const simplePrint = () => console.log('simplePrint!')

const add = (a, b) => a + b;

const add = (a, b) => { //{} 쓰면 return 써줘야댐
    return a + b
};

// IIFE : Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE')
})();

