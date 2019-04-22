function solve(input) {

    let regex = /(?<artist>^[A-Z][a-z' ]*):[A-Z ]+$/;

    for (let inputRow of input) {
        if (inputRow === 'end') {
            break;
        }

        if (inputRow.match(regex) === null) {
            console.log('Invalid input!');
        } else if (inputRow.match(regex) !== null) {
            let key = inputRow.match(regex).groups.artist.length;
            let encrypted = '';

            for (let c of inputRow) {
                if (c === ':') {
                    c = '@';
                } else if (c >= 'a' && c <= 'z') {
                    let ascii = c.charCodeAt(0) + key;
                    while (ascii > 122) {
                        ascii -= 26;
                    }
                    c = String.fromCharCode(ascii);
                } else if (c >= 'A' && c <= 'Z') {
                    let ascii = c.charCodeAt(0) + key;
                    while (ascii > 90) {
                        ascii -= 26;
                    }
                    c = String.fromCharCode(ascii);
                }

                encrypted = encrypted + c;
            }

            console.log(`Successful encryption: ${encrypted}`);
        }
    }
}

solve(['Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end']);
solve(['Michael Jackson:ANOTHER PART OF ME',
    'Adele:ONE AND ONLY',
    'Guns n\'roses:NOVEMBER RAIN',
    'Christina Aguilera: HuRt',
    'end']);