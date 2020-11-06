//reduce
let myReduce = function(arr, callback, accumulator) {
    if (accumulator === undefined) {
        accumulator = arr[0];
        for (let i = 0; i < arr.length - 1; i++) {
            accumulator = callback(accumulator, arr[i + 1]);
        }
    } else {
        for (let j = 0; j < arr.length; j++) {
            accumulator = callback(accumulator, arr[j]);
        }
    }
    return accumulator;
};

//forEach
let myForEach = function(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
};

//filter
let myFilter = function(collection, test) {
    let arr = [];
    for (let i = 0; i < collection.length; i++) {
        if (test(collection[i])) {
            arr.push(collection[i]);
        }
    }
    return arr;
};

//filter myForEach로 구현
let myFilter = function(arr, test) {
    let result = [];
    myForEach(arr, function(e) {
        if (test(e)) {
            result.push(e);
        }
    });
    return result;
};

//filter forEach로 구현
let myFilter = function(arr, test) {
    let result = [];
    arr.forEach(function(e) {
        if (test(e)) {
            result.push(e);
        }
    })
    return result;
}

//reduce로 map구현
let map = function(array, callback) {

    return array.reduce(function(acc, cur) {
        acc.push(callback(cur));
        return acc;
    }, []);
}


//reduce로 filter구현
let filter123 = function(array, callback) {

    return array.reduce(function(acc, cur) {
        if (callback(cur)) {
            acc.push(cur)
        }
        return acc;
    }, []);
}

//테스트
let arr = [1, 2, 3]

filter123(arr, function(e) {
    return e > 2
})