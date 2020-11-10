//해쉬함수
const hash = (string, changeValue) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % changeValue;
}

//해쉬맵
const HashMap = function () {
    let storage = [];               //빈 배열
    const chageValue = 10;          //hash함수의 나눠주는 값


    //put(String key, String value) 키-값을 추가한다.
    this.put = (key, value) => {

        const index = hash(key, chageValue); //해쉬함수의 값을 index로 활용

        if (storage[index] === undefined) {
            storage[index] = [[key, value]]; //없으면 넣어줌

        } else {
            const inserted = false;
            for (let i = 0; i < storage[index].length; i++) { //배열을 돌면서 
                if (storage[index][i][0] === key) { //키값이 겹치면 value를 바꿔줌
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted == false) storage[index].push([key, value]); //
        }
        console.log(index)
    }

    //containsKey(String) 해당 키가 존재하는지 판단해서 Bool 결과를 리턴한다.
    this.contains = key => {

        const index = hash(key, chageValue); //해쉬함수의 값을 index로 활용

        if (storage[index] === undefined) {
            return false;

        } else {
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return true;
                }
                return false
            }
        }
    };

    //get(String) 해당 키와 매치되는 값을 찾아서 리턴한다.
    this.get = key => {

        const index = hash(key, chageValue);

        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    }

    //isEmpty() 비어있는 맵인지 Bool 결과를 리턴한다.
    this.isEmpty = () => {
        if (storage.length == 0) {
            return true;
        }
        return false;
    }

    //keys() 전체 키 목록을 [String] 배열로 리턴한다.
    this.keys = () => {
        // console.log(storage)
        var key = [];
        for (let i = 0; i < storage.length; i++) {
            if (storage[i] !== undefined) {
                // console.log(storage[i])
                // console.log(storage[i].length)
                for (let j = 0; j < storage[i].length; j++) {
                    // console.log(storage[i][j][0])
                    key.push(storage[i][j][0])
                }
            }
        }
        return key
    }

    //remove(String key) 해당 키에 있는 값을 삭제한다.
    this.remove = (key) => {
        const index = hash(key, chageValue);
        if (storage[index] !== undefined) {
            storage.splice(index, 1)
        }
        return 'removed'
    }

    //replace(String key, String value) 키-값으로 기존 값을 대체한다.
    this.replace = (key, value) => {
        const index = hash(key, chageValue);

        if (storage[index] === undefined) {
            storage[index] = [[key, value]]
        }
        else {
            storage.splice(index, 1)
            storage[index] = [[key, value]]
        }
        return 'replaced'
    }

    //size() 전체 아이템 개수를 리턴한다.
    this.size = () => {
        let hashSize = 0
        for (let i = 0; i < storage.length; i++) {
            if (storage[i] !== undefined) {
                for (let j = 0; j < storage[i].length; j++) {
                    hashSize += 1
                }
            }
        }
        return hashSize
    }
    //clear() 전체 맵을 초기화한다.
    this.clear = () => {
        storage = []
    }

    this.print = () => {
        let data = [];
        for (let i = 0; i < storage.length; i++) {
            if (storage[i] !== undefined) {
                data.push(storage[i])
            }
        }
        return data
    }
}

const ht = new HashMap();

console.log('####################')
// put test
console.log('do put 3 items')
ht.put('JohnSmith', '521-1234')
ht.put('LisaSmith', '521-8976')
ht.put('SandraDee', '521-9655')
console.log('=== result ===')
console.log(ht.print())
console.log('####################')
// clear test
console.log('do clear')
ht.clear()
console.log('=== result ===')
console.log(ht.print())
console.log('####################')
// put test again
console.log('do put 3 items')
ht.put('JohnSmith', '521-1234')
ht.put('JohnSmithd', '521-8976') // same index
ht.put('LisaSmith', '521-8976')
ht.put('SandraDee', '521-9655')
console.log('=== result ===')
console.log(ht.print())
console.log('####################')
// contains test
console.log('JohnSmith is contained??')
console.log('=== result ===')
console.log(ht.contains('JohnSmith')) // expected : true
console.log('####################')
// getValue test
console.log('get value of JohnSmith')
console.log('=== result ===')
console.log(ht.getValue('JohnSmith')) // expected : 521-1234
console.log('####################')
// isEmpty test
console.log('JohnSmith is Empty?')
console.log('=== result ===')
console.log(ht.isEmpty('JohnSmith')) // expected : false
console.log('####################')
// keys test
console.log('get keys')
console.log('=== result ===')
console.log(ht.keys()) // expected : JohnSmith, JohnSmithd, LisaSmith, SandraDee
console.log('####################')
// remove test
console.log('remove SandraDee')
console.log('=== result ===')
ht.remove('SandraDee')
console.log(ht.print()) // expected : JohnSmith, JohnSmithd, LisaSmith
console.log('####################')
// replace test
console.log('replace LisaSmith to 111-1111')
console.log('=== result ===')
ht.replace('LisaSmith', '111-1111')
console.log(ht.print()) // expected : ListSmith, 111-1111
console.log('####################')
// size test
console.log('get size')
console.log('=== result ===')
console.log(ht.size()) // expected : 3
console.log('####################')

console.log(typeof ht.keys())

module.exports = HashMap