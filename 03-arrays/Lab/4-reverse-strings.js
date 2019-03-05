function solve(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let higherElement = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = higherElement;
    }

    console.log(arr.join(' '));

}

solve(['a', 'b', 'c', 'd', 'e'])