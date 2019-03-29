function solve(input) {
    let result = new Map();
    let neighbourhoods = input
        .shift()
        .split(', ');

    neighbourhoods.forEach(n => result.set(n, []));

    for (const line of input) {
        let [neighbourhood, name] = line.split(' - ');

        if (result.has(neighbourhood)) {
            let people = result.get(neighbourhood);
            people.push(name);
            result.set(neighbourhood, people);
        }
    }

    let output = [...result.entries()];
    output.sort((a, b) => b[1].length - a[1].length);
    for (const [n, p] of output) {
        console.log(`${n}: ${p.length}`);
        for (const person of p) {
            console.log(`--${person}`);            
        }
    }
}

solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'])