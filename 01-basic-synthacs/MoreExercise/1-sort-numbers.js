function solve(x, y, z) {
    let numArray = [x, y, z];
    numArray.sort(function (a, b) { return b - a });
    for (let i = 0; i <= numArray.length - 1; i++) {
        console.log(numArray[i]);
    }
}

solve(2, 1, 3);