function solve(arrInput) {
    let arrOutput = [];
    let sumInput = 0;
    let sumOutput = 0;
    for (let i = 0; i < arrInput.length; i++) {
        if (arrInput[i] % 2 === 0) {
            arrOutput[i] = arrInput[i] + i;  
        } else {
            arrOutput[i] = arrInput[i] - i;
        }
        sumInput += arrInput[i];
        sumOutput += arrOutput[i];
    }
    console.log(arrOutput);
    console.log(sumInput);
    console.log(sumOutput);
}

solve([5, 15, 23, 56, 35]);