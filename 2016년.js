function solution(a, b) {

    var answer = '';
    let day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let sum = 5; //금요일부터 시작

    for (let i = 0; i < a - 1; i++) { //for문 돌아가는 순서 1 2 3  23 23 
        sum = sum + month[i]
    }

    sum = sum + (b - 1)

    answer = sum % 7
    return day[answer]
}