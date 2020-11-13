function solution(arr, divisor) {
    var answer = [];

    var beforeSort = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            beforeSort.push(arr[i])
        }
    }

    if (beforeSort.length === 0) {
        beforeSort = [-1]
    }

    return answer = beforeSort.sort(function(a, b) {
        return a - b
    })
}