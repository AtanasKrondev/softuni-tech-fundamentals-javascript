function cookingMasteclass(input) {
    let budget = +input[0];
    let students = +input[1];
    let priceFlourPackage = +input[2];
    let priceEggSingle = +input[3];
    let priceApronSingle = +input[4];

    let freeFlourPackages = Math.floor(students / 5);
    let priceAllFlour = (students - freeFlourPackages) * priceFlourPackage;
    let priiceAllEggs = students * priceEggSingle * 10;
    let priceAllAprons = Math.ceil(students * 1.2) * priceApronSingle;

    let moneySpent = priceAllFlour + priiceAllEggs + priceAllAprons;

    if (moneySpent <= budget) {
        console.log(`Items purchased for ${moneySpent.toFixed(2)}$.`);
    } else {
        console.log(`${(moneySpent - budget).toFixed(2)}$ more needed.`);
    }
}

cookingMasteclass([100, 25, 4.0, 1, 6.0]);