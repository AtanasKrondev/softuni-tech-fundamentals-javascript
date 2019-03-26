function solve(input) {
    let houses = input.shift().split('@').map(Number);
    input.pop();
    let santa = 0;
    let fails = 0;

    for (let inputRow of input) {
        let command = inputRow.split(' ');
        let jump = +command[1];
        santa += jump;
        while (santa >= houses.length) {
            santa -= houses.length;
        }

        if (houses[santa] === 0) {
            console.log(`House ${santa} will have a Merry Christmas.`);
        } else {
            houses[santa] -= 2;
        }
    }

    for (let house of houses) {
        if (house !== 0) {
            fails++;
        }
    }

    console.log(`Santa's last position was ${santa}.`);

    if (fails === 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Santa has failed ${fails} houses.`);
    }
}

solve(['2@4@2',
    'Jump 2',
    'Jump 2',
    'Jump 8',
    'Jump 3',
    'Jump 1',
    'Merry Xmas!']);