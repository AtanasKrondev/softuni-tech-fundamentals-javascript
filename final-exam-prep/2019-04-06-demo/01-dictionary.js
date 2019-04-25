function solve(input) {
    let wordsAndDefinitions = input.shift().split(' | ');
    let checkWords = input.shift().split(' | ');
    let finalCommand = input.shift();
    let dictionary = {};

    for (let def of wordsAndDefinitions) {
        let [word, definition] = def.split(': ');
        if (!dictionary.hasOwnProperty(word)) {
            dictionary[word] = [];
        }
        dictionary[word].push(definition);
    }

    for (let word of checkWords) {
        if (dictionary.hasOwnProperty(word)) {
            console.log(word);
            let sortedDefinitions = dictionary[word]
                .sort((a, b) => b.length - a.length)
                .forEach(a => console.log(` -${a}`));
        }
    }

    if (finalCommand === 'List') {
        console.log(Object.keys(dictionary)
            .sort((a, b) => a.localeCompare(b))
            .join(' '));
    }
}

solve(['programmer: an animal, which turns coffee into code | developer: a magician',
    'Pesho | Gosho',
    'List']);
solve(['tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
    'bit | code | tackle',
    'End']);