function solve(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'add':
                output.push(i + 1);
                break;
            case 'remove':
                output.pop();
                break;
        }
    }
    if (output.length === 0) {
        console.log('Empty');
    } else{
        console.log(output.join(' '));
    }
}

solve(['remove', 'remove', 'remove']);