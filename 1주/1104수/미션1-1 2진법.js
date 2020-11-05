let binaryArr = [];
let result = [];
let gildongResult = [];

const solution = (n, t, m, p) => {
    const totalNum = Math.pow(n, t - 1) - 1; //총 숫자개수

    const changeToBinary = (totalNum) => {
        for (let i = 0; i <= totalNum; i++) {
            let binary = i.toString(n); // 2진법 ex) 3 -> '11'
            binaryArr.push(binary);
        }
    };

    changeToBinary(totalNum);

    for (let elem of binaryArr) {
        let num = elem.split(''); // 2진법바뀐 수 하나씩 나눠주기
        console.log(num)
        result.push(...num);
    }

    console.log(result); //총 2진법 수



    const gildong = (m, p) => {
        for (let i = 0; p + m * i - 1 < result.length; i++) {
            gildongResult.push(result[p + m * i - 1]);
        }
    };
    gildong(m, p);

    console.log(gildongResult); //길동이 말해야하는 수

};

solution(2, 4, 2, 1);