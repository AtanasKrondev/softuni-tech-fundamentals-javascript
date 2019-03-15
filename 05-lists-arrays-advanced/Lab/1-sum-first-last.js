function solve(arr) {
    let lastElement = arr.pop();
    let firstElement = arr.shift();

    return +(firstElement) + +(lastElement);
}

console.log(solve(['20', '30', '40']));