function airPolution(matrix, events) {
    let mapSofia = [];
    for (let i = 0; i < matrix.length; i++) {
        mapSofia.push(matrix[i].split(' ').map(Number));
    }

    for (let i = 0; i < events.length; i++) {
        let event = events[i].split(' ');
        let force = event[0];

        switch (force) {
            case 'breeze':
                let row = +event[1];

                for (let col = 0; col < 5; col++) {
                    mapSofia[row][col] -= 15;
                    if (mapSofia[row][col] < 0) {
                        mapSofia[row][col] = 0;
                    }
                }
                break;
            case 'gale':
                let col = +event[1];

                for (let row = 0; row < 5; row++) {
                    mapSofia[row][col] -= 20;
                    if (mapSofia[row][col] < 0) {
                        mapSofia[row][col] = 0;
                    }
                }
                break;
            case 'smog':
                let value = +event[1];
                for (let i = 0; i < 5; i++) {
                    mapSofia[i] = mapSofia[i].map(x => x + value);
                }
                break;
        }

    }

    let polutedAreas = [];
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (mapSofia[row][col] >= 50) {
                polutedAreas.push(`[${row}-${col}]`);
            }
        }
    }

    if (polutedAreas.length === 0) {
        console.log('No polluted areas');
    } else {
        console.log(`Polluted areas: ${polutedAreas.join(', ')}`);
    }
}

airPolution(["5 7 2 14 4",
    "21 14 2 5 3",
    "3 16 7 42 12",
    "2 20 8 39 14",
    "7 34 1 10 24"],
    ["breeze 1", "gale 2", "smog 35"]);