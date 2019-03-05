function solve(num, arr) {
    let resultArr = [];
    let output = '';
    for (let i = 0; i < num; i++) {
        let currentElement = arr[num - 1 - i];
        resultArr.push(currentElement);
        output = output + currentElement + ' ';
    }
    console.log(output);
}

solve(3, [10, 20, 30, 40, 50]);