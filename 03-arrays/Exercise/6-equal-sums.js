function solve(arr) {
    for (let e in arr) {
        arr[e] = +arr[e];
    }
    let areEqualSums = false;
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }
        for (let k = i + 1; k < arr.length; k++) {
            rightSum += arr[k];
        }
        if (leftSum === rightSum) {
            areEqualSums=true;
            console.log(i);
            break;
        }
    }
    if (!areEqualSums) {
        console.log('no');
    }
}

solve([1]);