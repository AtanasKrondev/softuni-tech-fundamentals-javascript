function solve(shift) {
    let money = 0;
    let bitcoin = 0;
    let isBought = false;
    let firstBought = 0;
    for (let i = 0; i <= shift.length - 1; i++) {
        if ((i + 1) % 3 === 0) {
            money += shift[i] * 0.7 * 67.51;
        } else {
            money += shift[i] * 67.51;
        }
        while (money >= 11949.16) {
            if (!isBought) {
                isBought = true;
                firstBought = i + 1;
            }
            bitcoin++;
            money -= 11949.16;
        }
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if (isBought) {
        console.log(`Day of the first purchased bitcoin: ${firstBought}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

solve([3124.15, 504.212, 2511.124]);