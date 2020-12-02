//1. string concat
console.log('9' + 1)
console.log('ellie\'s car')
console.log('ellie\'s \ncar')

//2. numeric oper
console.log(2 ** 3) //제곱

//3. increment
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1; //업뎃하고
//preIncrement = counter; //할당
const postIncrement = counter++;
//preIncrement = counter; //할당해놓고 
// counter = counter + 1; //업뎃

//4. Assignment
let x = 3;
x += y // x = x + y

//5. 비교연산자 

//6. 논리연산자
const value1 = true;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || check()}`);
//앞에꺼 하나만 true면 다 true
//false false 일때만 check호출
console.log(`and: ${value1 && value2 && check()}`);
//앞에꺼 하나만 false면 다 false
// true true 일때만 check호출

function check() {
    for (let i = 0; i < 10; i++) {
        //westing time
        console.log('우웩');
    }
    return true;
}

// nullableObject && nullableObject.something
if (nullableObject !== null) {
    nullableObject.something
}

// ! not
console.log(!value1);

//7.  === !==
const ellie1 = { name: "ellie" }
const ellie2 = { name: "ellie" }
const ellie3 = ellie1//앞에꺼 하나만

//8. if

//9. Ternary operator
let name = 'ellie'
console.log(name === 'ellie' ? 'yes' : 'no')

//10. switch
const browser = 'IE'
switch (browser) {
    case 'chrome':
        console.log("크롬짱")
        break;
    case 'IE':
    case 'fifefox':
        console.log("바꾸셈")
        break;
    default:
        console.log("에휴")
        break;

}

//11. loop
let i = 3;
while (i > 0) {
    console.log(i)
    i--
}

do {
    console.log(i)
    i--;
} while (i > 0);

//12. for
break
continue