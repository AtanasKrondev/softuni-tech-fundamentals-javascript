function solve(arr) {
    let shifts = +arr.pop();
    for (let i = 1; i <= shifts; i++) {
        let swap = arr.pop();
        arr.unshift(swap);
    }
    console.log(arr.join(' '));
}

solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);