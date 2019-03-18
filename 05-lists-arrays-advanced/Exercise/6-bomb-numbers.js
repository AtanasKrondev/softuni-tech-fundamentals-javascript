function bombNumbers(field, explosion) {
    let bomb = explosion[0];
    let power = explosion[1];

    for (let i = 0; i < field.length; i++) {
        if (field[i] === bomb) {
            let startExplosion = Math.max(0, i - power);
            let endExplosion = Math.min(field.length - 1, i + power);
            for (let j = startExplosion; j <= endExplosion; j++) {
                field[j] = 0;
            }
        }
    }

    console.log(field.reduce((a, b) => a + b));
}

bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]);