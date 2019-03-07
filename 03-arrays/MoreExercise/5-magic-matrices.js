function solve(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let sumRowOne = arr[i].reduce((a, b) => a + b, 0);
        let sumRowTwo = arr[i + 1].reduce((a, b) => a + b, 0);
        let sumColOne = 0;
        let sumColTwo = 0;
        for (let j = 0; j < arr.length; j++) {
            sumColOne += arr[i][j];
            sumColTwo += arr[i + 1][j];
        }
        if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
            console.log('false');
            return;
        }
    }
    console.log('true');
}

solve([[4, 7, 6],
[6, 5, 4],
[5, 5, 5]])