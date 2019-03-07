function solve(input) {
    let spaceH = input[0];
    let spaceW = input[1];
    let starX = input[2];
    let starY = input[3];
    let space = [];
    for (let x = 0; x < spaceH; x++) {
        space[x] = [];
        for (let y = 0; y < spaceW; y++) {
            space[x][y] = 0;
        }
    }
    space[starX][starY] = 1;
    let orbit = 2;
    let orbitLtop = starX - 1;
    let orbitRtop = starX + 1;
    let orbitLbottom = starY - 1;
    let orbitRbottom = starY + 1;
    while (orbit <= spaceH || orbit <= spaceW) {
        if (orbitLtop < 0) {
            orbitLtop = 0;
        }
        if (orbitLbottom < 0) {
            orbitLbottom = 0;
        }
        if (orbitRtop >= spaceW) {
            orbitRtop = spaceW - 1;
        }
        if (orbitRbottom >= spaceH) {
            orbitRbottom = spaceH - 1;
        }
        for (let x = orbitLtop; x <= orbitRtop; x++) {
            for (let y = orbitLbottom; y <= orbitRbottom; y++) {
                if (space[x][y] === 0) {
                    space[x][y] = orbit;
                }
            }
        }
        orbit++;
        orbitLtop--;
        orbitRtop++;
        orbitLbottom--;
        orbitRbottom++;
    }

    space.forEach(row => console.log(row.join(' ')));
}

solve([5, 5, 4, 2]);