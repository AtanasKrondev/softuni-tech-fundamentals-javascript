function solve(input) {
    input = input.map(Number);
    let daysOfTrip = input.shift();
    let budget = input.shift();
    let people = input.shift();
    let fuelPerKm = input.shift();
    let foodExpencesPerPerson = input.shift();
    let priceRoomPerNightPerPerson = input.shift();

    let currentExpences = 0;
    let foodExpences = daysOfTrip * foodExpencesPerPerson * people;
    currentExpences += foodExpences
    let hotelExpences = daysOfTrip * priceRoomPerNightPerPerson * people;
    if (people > 10) {
        hotelExpences *= 0.75;
    }
    currentExpences += hotelExpences;

    for (let i = 0; i < daysOfTrip; i++) {
        if (budget < currentExpences) {
            console.log(`Not enough money to continue the trip. You need ${(currentExpences - budget).toFixed(2)}$ more.`);
            return;
        }

        let kmForTheDay = input[i];
        let fuelForTheDay = kmForTheDay * fuelPerKm;
        currentExpences += fuelForTheDay;

        if ((i + 1) % 3 === 0 || (i + 1) % 5 === 0) {
            currentExpences += currentExpences * 0.4;
        }
        if ((i + 1) % 7 === 0) {
            currentExpences -= currentExpences / people;
        }
    }

    if (currentExpences <= budget) {
        console.log(`You have reached the destination. You have ${(budget - currentExpences).toFixed(2)}$ budget left.`);

    } else{
        console.log(`Not enough money to continue the trip. You need ${(currentExpences - budget).toFixed(2)}$ more.`);
    }
}

solve(['9',
    '32057',
    '19',
    '14',
    '23',
    '720',
    '551',
    '182',
    '235',
    '644',
    '1044',
    '658',
    '552',
    '583']);