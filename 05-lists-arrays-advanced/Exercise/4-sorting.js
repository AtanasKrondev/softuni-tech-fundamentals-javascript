function solve(arr) {
    arr.sort((a, b) => b - a);

    let result = [];

    while (arr.length>0) {
        result.push(arr.shift());
        result.push(arr.pop());
    }

    console.log(result.join(' '));    
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);