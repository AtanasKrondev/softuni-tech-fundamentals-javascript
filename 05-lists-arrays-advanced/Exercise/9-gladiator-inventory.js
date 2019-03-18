function gladiatorInventory(input) {
    let inventory = input.shift().split(' ');

    for (let element of input) {
        element = element.split(' ');
        let comand = element[0];
        let equipment = element[1];

        switch (comand) {
            case 'Buy':
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;
            case 'Trash':
                if (inventory.includes(equipment)) {
                    let trashIndex = inventory.indexOf(equipment);
                    inventory.splice(trashIndex, 1);
                }
                break;
            case 'Repair':
                if (inventory.includes(equipment)) {
                    let repairIndex = inventory.indexOf(equipment);
                    inventory.splice(repairIndex, 1);
                    inventory.push(equipment);
                }
                break;
            case 'Upgrade':
                equipment = equipment.split('-');
                let currentEquipment = equipment[0];
                let upgradeEquipent = equipment[1];
                if (inventory.includes(currentEquipment)) {
                    let upgradeIndex = inventory.indexOf(currentEquipment) + 1;
                    inventory.splice(upgradeIndex, 0, `${currentEquipment}:${upgradeEquipent}`)
                }
                break;
        }
    }

    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
]);