function solve(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let countFive = 0;
    let height = 0;
    for (let i = base; i > 0; i = i - 2) {
        height++;
        countFive++;
        stone += (Math.pow(i - 2, 2)) * increment;
        if (i <= 2) {
            gold = (Math.pow(i, 2)) * increment;
            stone -= (Math.pow(i - 2, 2)) * increment;
        } else if (countFive === 5) {
            lapisLazuli += ((i * 4) - 4) * increment;
            countFive = 0;
        } else {
            marble += ((i * 4) - 4) * increment;
        }
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height*increment)}`);
}

solve(11, 0.75);