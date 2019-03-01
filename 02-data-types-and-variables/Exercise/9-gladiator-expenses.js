function solve(fights, helmetP, swordP, shieldP, armorP) {
    let lostFightsCounter = fights;
    let helmetPrice = helmetP;
    let swordPrice = swordP;
    let shieldPrice = shieldP;
    let armorPrice = armorP;
    let totalExpences = 0;
    for (let i = 1; i <= lostFightsCounter; i++) {
        if (i % 2 === 0) {
            totalExpences += helmetPrice;
        }
        if (i % 3 === 0) {
            totalExpences += swordPrice;
        }
        if (i % 6 === 0) {
            totalExpences += shieldPrice;
        }
        if (i % 12 === 0) {
            totalExpences += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${totalExpences.toFixed(2)} aureus`);
}

solve(7, 2, 3, 4, 5);