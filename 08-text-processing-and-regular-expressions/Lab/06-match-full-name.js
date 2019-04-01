function solve(input) {
    let pattern = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/g;
    let names = [];
    let validName = '';
    while ((validName = pattern.exec(input)) !== null) {
        names.push(validName[0]);
    }
    console.log(names.join(' '));
}

solve("Steven Son, Steven son, steven Son, STeven Son, Michael Braun, MichaelBraun");