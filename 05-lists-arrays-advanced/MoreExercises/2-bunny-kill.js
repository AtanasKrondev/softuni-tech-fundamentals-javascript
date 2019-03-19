function bunnyKillMission(input) {

    function explosion(field, x, y) {
        let damage = field[x][y];
        let fieldRows = field.length - 1;
        let fieldCols = field[0].length - 1;

        for (let row = x - 1; row <= x + 1; row++) {
            for (let col = y - 1; col <= y + 1; col++) {
                if (row >= 0 && col >= 0 && row <= fieldRows && col <= fieldCols) {
                    field[row][col] -= damage;
                }
            }
        }

        return field;
    }

    let bombBunnies = input
        .pop()
        .split(' ')
        .filter(x => x != '');

    let hanger = [];
    for (let i = 0; i < input.length; i++) {
        hanger.push(input[i].split(' ').map(Number));
    }

    let damage = 0;
    let kills = 0;

    for (let i = 0; i < bombBunnies.length; i++) {
        let currentBomb = bombBunnies[i].split(',').map(Number);
        let bombX = currentBomb[0];
        let bombY = currentBomb[1];

        if (hanger[bombX][bombY] > 0) {
            damage += hanger[bombX][bombY];
            kills++;
            explosion(hanger, bombX, bombY);
        }
    }

    for (let row = 0; row < hanger.length; row++) {
        for (let col = 0; col < hanger[row].length; col++) {
            if (hanger[row][col] > 0) {
                damage += hanger[row][col];
                kills++;
            }
        }
    }

    console.log(damage);
    console.log(kills);
}

bunnyKillMission(['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1']);