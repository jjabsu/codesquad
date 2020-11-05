///////////////////////////////무식하게 코딩
let newArr = [];

function filterId(peoples) {
    for (let i = 0; i < peoples.length; i++) {
        if (!peoples[i].includes('!') && !peoples[i].includes('@') &&
            peoples[i].includes('#') && peoples.includes(3) && peoples.includes(5)) {
            newArr.push(peoples[i])
        }
    }
}

//////////////////////////////필터메소드  (정규표현식공부할 것)
function specialCharacters(value) {
    return !value.includes('!') && !value.includes('@') && !value.includes('#')
}

function numberIncluded(value) {
    return value.includes(1) && value.includes(3) && value.includes(5)
}

peoples.filter(specialCharacters).filter(numberIncluded);

/*
필터메소드 연습
function isBigEnough(value) {
    return value >= 10;
  }

  var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // filtered 는 [12, 130, 44]
*/