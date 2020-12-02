'use strict'
// class 안에 묶어 놓자 (속성, 행동(메쏘드))

// class 붕어빵틀 (no data in)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name}: hello!`)
    }
}

// object 붕어빵 (data in)
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    get age() {
        return this._age
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can be negative')
        // }

        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('heechan', -1)

// user의 나이는 _age에 저장되고, 프로퍼티에 접근하는 것은 getter(user.name)와 setter(user.name = value)를 통해 이뤄집니다.
// getter 메서드는 obj.propName을 사용해 프로퍼티를 읽으려고 할 때 실행됩니다.
// setter 메서드는 obj.propNAme = value으로 프로퍼티에 값을 할당하려 할 때 실행됩니다.

// 키워드 static , extends 