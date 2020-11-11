const inspector = {
    getDataArr(string) {
        return string.split('');
    },

    braceFilter(item) {
        return item === '[' || item === ']';
    },

    braceChecker(braceArr) {
        let stack = [];
        for (let i of braceArr) {
            let lastItem = stack[stack.length - 1];
            if (i === '[') {
                stack.push(i);
            } else {
                if (lastItem === '[') {
                    stack.pop();
                } else {
                    console.log('여는 괄호가 일치하지 않습니다.');
                }
            }
        }
        if (stack.length !== 0) {
            console.log('닫는 괄호가 일치하지 않습니다.');
        } else {
            console.log('괄호 매칭이 맞습니다!');
            return true;
        }
    },

    valueFilter(item) {
        return item !== ',' && item === '[' && item === ']'
    },

    printInfo(string) {
        const dataArr = this.getDataArr(string);
        const braceArr = dataArr.filter(this.braceFilter);
        const valueArr = dataArr.filter(this.valueFilter);
        console.log(
            `깊이 수준은 ${braceArr.length / 2}이며, 총 ${valueArr.length}개의 원소가 포함되어 있습니다.`
        );
    },
    main(string) {
        const dataArr = this.getDataArr(string);
        const braceArr = dataArr.filter(this.braceFilter);
        if (this.braceChecker(braceArr)) {
            this.printInfo(string);
        }
    }
};

const data1 = "[1, 2, [3]]";
inspector.main(data1);

const data3 = "[1,2,[3,4,[5,[6]]";
inspector.main(data3);