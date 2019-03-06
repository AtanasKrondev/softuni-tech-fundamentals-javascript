function solve(input) {
    let arr = input[0].split(' ');
    let maxSequence = [];
    let checkSequence = [];
    for (let e in arr) {
        arr[e] = +arr[e];
    }
    for (let i = 0; i < arr.length - 1; i++) {
        checkSequence.push(arr[i]);
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                checkSequence.push(arr[j]);
            } else {
                break;
            }
        }
        if (checkSequence.length > maxSequence.length) {
            maxSequence = checkSequence.slice(0);
        }
        checkSequence = [];
    }
    console.log(maxSequence.join(' '));
}

solve(['0 1 1 5 2 2 6 3 3']);