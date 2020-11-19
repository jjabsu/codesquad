const hcArr = ["HeeChan", "32", true, "seoul"]

const hcObj = {
    name: "HC",
    age: "32",
    gender: "Male",
    isHandsome: true,
    favMovies: ["Along the gods", "LOTR"],
    favFood: [{
            name: "kimchi",
            isGood: true
        },
        {
            name: "cheese",
            isGood: true
        }
    ]
}

console.log(hcObj.favFood[0].isGood)
    //console// object 
    //log//     key: function 빌트인

function sayHello(name, age) {
    // name 파라미터 parameter //arguement가 들어감
    // console.log("hi " + name, "you are " + age)
    // console.log(`hi ${name} you are ${age}`)
    return `hi ${name} you are ${age}`
}

sayHello("heechan", 32) // "heechan" 인자 argument

const greetHc = sayHello("heechan", 32)
    //greethc는 sayHello함수의 리턴값이다

console.log(greetHc)

//return 연습
const calculator = {
    plus: function plus(a, b) {
        return a + b
    }
}

const plus = calculator.plus(3, 5)
console.log(plus)