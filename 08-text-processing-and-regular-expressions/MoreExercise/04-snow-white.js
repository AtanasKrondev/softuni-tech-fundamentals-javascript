function solve(text, names) {
    let regex = /\bdwarf\b/g;
    let count = 0;
    text = text.split(' ');

    for (let i in text) {
        if (text[i].match(regex)) {
            if (count < names.length) {
                text[i] = text[i].replace(regex, `dwarf ${names[count]}`);
                count++;
            } else {
                text[i] = text[i].replace(regex, '');
            }
        }
    }

    let result = text.filter(e => e != '');
    console.log(result.join(' '));
}

solve("Yet another ,dwarf fairytale tragedy! There are dwarf so many dwarfs, is it dwarf possible to help dwarf Show white?",
    ["Doc", "Dopey", "Sleepy"]);