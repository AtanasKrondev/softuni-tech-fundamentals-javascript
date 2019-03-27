function breadFactory(input) {
    let energy = 100;
    let coins = 100;
    let events = input[0].split('|');

    for (let i = 0; i < events.length; i++) {
        let singleEvent = events[i].split('-');
        let eventIngredient = singleEvent[0];
        let number = +singleEvent[1];

        if (eventIngredient === 'rest') {
            let rest = Math.min(number, 100 - energy);
            console.log(`You gained ${rest} energy.`);
            energy += rest;
            console.log(`Current energy: ${energy}.`);

        } else if (eventIngredient === 'order') {
            if (energy - 30 < 0) {
                energy += 50;
                console.log('You had to rest!');
                
            } else {
                energy -= 30;
                coins += number;
                console.log(`You earned ${number} coins.`);
            }
        } else {
            coins -= number;
            if (coins > 0) {
                console.log(`You bought ${eventIngredient}.`);
            } else {
                console.log(`Closed! Cannot afford ${eventIngredient}.`);
                return;
            }
        }
    }

    if (coins > 0) {
        console.log('Day completed!');
        console.log(`Coins: ${coins}`);
        console.log(`Energy: ${energy}`);
    }
}

breadFactory('rest-2|order-10|eggs-100|rest-10');