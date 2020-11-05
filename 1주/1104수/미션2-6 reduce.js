[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
});
/////////////////////////////////////

const numbers = [1, 2, 3, 4, 5];

let sum = 0;

numbers.forEach(function(n) {
    sum += n;
})

console.log(sum);
//////////////////////////////////
function myReduce(arr, acc) {
    if (acc === undefined) {
        acc = arr[0]
        for (let i = 1; i < arr.length; i++) {
            acc = acc + arr[i]
        }
        return acc
    } else {
        for (let i = 0; i < arr.length; i++) {
            acc = acc + arr[i]
        }
        return acc
    }
}