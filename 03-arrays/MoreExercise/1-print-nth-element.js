function solve(input) {
    let theN = +input.pop();
    let collections = [];
    for (let i = 0; i < input.length; i = i + theN) {
        collections.push(input[i]);
    }
    console.log(collections.join(' '));
}

solve(['5', '20', '31', '4', '20', '2']);