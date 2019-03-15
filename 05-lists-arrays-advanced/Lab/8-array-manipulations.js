function solve(input) {
    let result = input.shift().split(' ');

    for (let e in result) {
        result[e] = +result[e];
    }

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');
        command[1] = +command[1];
        command[2] = +command[2];
        switch (command[0]) {
            case 'Add':
                result.push(command[1]);
                break;
            case 'Remove':
                result = result.filter(a => a !== command[1]);
                break;
            case 'RemoveAt':
                result.splice(command[1], 1);
                break;
            case 'Insert':
                result.splice(command[2], 0, command[1]);
                break;
        }
    }

    console.log(result.join(' '));
}

solve(["4 19 2 53 6 43",
    "Add 3",
    "Remove 2",
    "RemoveAt 1",
    "Insert 8 3"]);