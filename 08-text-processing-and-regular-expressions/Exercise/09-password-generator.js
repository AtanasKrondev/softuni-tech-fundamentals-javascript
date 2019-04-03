function solve(input) {
    let keyword = input[2].toUpperCase();
    let totalPass = input[0] + input[1];
    let keyLetterIndex = 0;
    let vowels = /[aeiou]/g;
    let found = '';

    for (let i = 0; i < totalPass.length; i++) {
        let letter = totalPass[i];
        if ((found = letter.match(vowels)) !== null) {
            if (keyLetterIndex > keyword.length - 1) {
                keyLetterIndex = 0;
            }

            let keyLetter = keyword[keyLetterIndex++];
            totalPass = totalPass.replace(found[0], keyLetter);
        }
    }


    let reversedPass = totalPass.split('').reverse().join('');
    console.log(`Your generated password is ${reversedPass}`);
}

solve(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);