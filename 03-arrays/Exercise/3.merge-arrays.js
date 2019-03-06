function solve(firstArr, secArr) {
    let resultArr = [];
    for (let i = 0; i < firstArr.length; i++) {
        if (i % 2 === 0) {
            resultArr.push(+firstArr[i] + +secArr[i]);
        } else {
            resultArr.push(firstArr[i] + secArr[i]);
        }
    }
    console.log(resultArr.join(' - '));
}

solve(["5", "15", "23", "56", "35"],
    ["17", "22", "87", "36", "11"]);