function solve(input) {
    let laLouvre = input.shift().split(' ').map(Number);
    input.pop();
    for (let inputRow of input) {
        let command = inputRow.split(' ');
        let action = command[0];

        switch (action) {
            case 'Change':
                let toChange = +command[1];
                let newNumber = +command[2];

                if (laLouvre.includes(toChange)) {
                    laLouvre[laLouvre.indexOf(toChange)] = newNumber;
                }

                break;
            case 'Hide':
                let toHide = +command[1];

                if (laLouvre.includes(toHide)) {
                    laLouvre.splice(laLouvre.indexOf(toHide), 1);
                }
                break;
            case 'Switch':
                let firstSwitch = +command[1];
                let secondSwitch = +command[2];

                if (laLouvre.includes(firstSwitch) && laLouvre.includes(secondSwitch)) {
                    let firstIndex = laLouvre.indexOf(firstSwitch);
                    let secondIndex = laLouvre.indexOf(secondSwitch);

                    laLouvre.splice(firstIndex, 1, secondSwitch);
                    laLouvre.splice(secondIndex, 1, firstSwitch);
                }
                break;
            case 'Insert':
                let insertPosition = +command[1] + 1;
                let painting = +command[2];
                if (insertPosition <= laLouvre.length) {
                    laLouvre.splice(insertPosition, 0, painting);
                }
                break;
            case 'Reverse':
                laLouvre.reverse();
                break;
        }

    }

    console.log(laLouvre.join(' '));
}

solve(['77 120 115 101 101 97 78 88 112 111 108 101 111 110',
    'Insert 5 32',
    'Switch 97 78',
    'Hide 88',
    'Change 120 117',
    'END']);