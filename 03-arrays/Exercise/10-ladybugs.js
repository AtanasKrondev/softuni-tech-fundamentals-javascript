function solve(input) {
    let n = input.shift();
    let positions = input.shift().split(' ');
    for (var e in positions) {
        positions[e] = +positions[e];
    }
    let field = Array(n).fill(0);
    for (let i = 0; i < positions.length; i++) {
        if (positions[i] >= 0 && positions[i] < n) {
            field[positions[i]] = 1;
        }
    }


    for (let i = 0; i < input.length; i++) {
        let step = input[i].split(' ');
        let index = +step[0];
        let direction = step[1];
        let flight = +step[2];

        if ((index >= 0) && (index < n && (field[index] === 1))) {
            field[index] = 0;
            if (direction === 'right') {
                while ((index + flight < n) && (index + flight >= 0)) {
                    if (field[index + flight] === 0) {
                        field[index + flight] = 1;
                        break;
                    } else {
                        index += flight;
                    }
                }
            } else if (direction === 'left') {
                while ((index - flight < n) && (index - flight >= 0)) {
                    if (field[index - flight] === 0) {
                        field[index - flight] = 1;
                        break;
                    } else {
                        index -= flight;
                    }
                }
            } else field[index] = 1;
        }
    }
    console.log(field.slice(0, n).join(' '));
}

solve([3,
    '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1'])