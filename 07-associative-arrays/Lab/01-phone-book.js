function solve(input) {
    let arr = {};

    for (let i = 0; i < input.length; i++) {
        let [name, number] = input[i].split(' ');
        arr[name] = number;
    }

    for (const name in arr) {
        console.log(`${name} -> ${arr[name]}`);
    }
}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);