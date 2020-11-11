//고유한 Hash 함수를 정한다.

//해쉬함수 
//어떤 특정 값을 받으면 그 값을 해시 함수에 통과시켜 
//나온 인덱스(index)에 저장하는 자료구조이다.

/*
밸류값을 해시함수에 넣어서 나온 값을 키값으로 넣어준다.
키값이 겹칠 경우 다른데 넣어준다.
*/

function hash(string, change) {

    let hash = 0;

    for (let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
        console.log(hash)
    }
    return hash % change;
};

const HashTable = function() {
    let storage = [];
    const storageLimit = 5;

    this.put = (key, value) => {
        const index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            storage[index] = [key, value]

        } else if (storage >= storageLimit) {
            console.log('꽉참');
            return;

        } else { //선형탐사법
            console.log(`${index}번 인덱스에 ${value} 저장하려다 충돌 발생`);
            console.log('옆 인덱스에 저장');
            storage[index + 1] = [key, value]
        }
    }
}


const ht = new HashTable();
ht.put('a', 'a');
ht.put('b', 'b');
ht.put('c', 'c');
ht.put('d', 'd');