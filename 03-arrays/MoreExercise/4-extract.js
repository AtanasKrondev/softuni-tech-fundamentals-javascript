function solve(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= max) {
            max = arr[i];
            result.push(max);
            // arr.filter(maxValue => maxValue > max);
        }
    }
    console.log(result.join(' '));
    
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);