function solve(input) {
    let guests = [];

    for (let comand of input) {
        let name = comand.split(' ')[0];

        if (!comand.includes('not')) {
            if (!guests.includes(name)) {
                guests.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (guests.includes(name)) {
                let index = guests.indexOf(name);
                guests.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    guests.forEach(n => console.log(n));
}

solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])