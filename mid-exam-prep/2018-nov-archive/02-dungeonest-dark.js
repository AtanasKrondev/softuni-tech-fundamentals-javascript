function dungeonestDark(input) {
    let health = 100;
    let coins = 0;
    let room = 0;
    let rooms = input[0].split('|');

    for (let singleRoom of rooms) {
        let currentRoom = singleRoom.split(' ');
        let command = currentRoom[0];
        let number = +currentRoom[1];
        room++;

        switch (command) {
            case 'potion':
                let initialHealth = health;
                health += number;
                if (health > 100) {
                    number = 100 - initialHealth;
                    health = 100;
                }
                console.log(`You healed for ${number} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                coins += number;
                console.log(`You found ${number} coins.`);
                break;
            default:
                let monster = command;
                health -= number;

                if (health > 0) {
                    console.log(`You slayed ${monster}.`);
                } else {
                    console.log(`You died! Killed by ${monster}.`);
                    console.log(`Best room: ${room}`);
                    return;
                }
                break;
        }
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);   

}

dungeonestDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);