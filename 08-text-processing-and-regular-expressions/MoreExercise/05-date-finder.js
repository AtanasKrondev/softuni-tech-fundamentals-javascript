function solve(input) {
    let regex = /\b(?<day>\d{2})-(?<month>[A-Z][a-z]{2})-(?<year>\d{4})\b/g;
    let date = [];
    for (let sentence of input) {
        while ((date = regex.exec(sentence)) !== null) {
            console.log(`${date.groups['day']} ${date.groups['month']} ${date.groups['year']}`);
        }
    }
}

solve(['I am 12-Mar-2007 born on 28-Feb-1994.',
    'This is not date: 512-Jan-1996.',
    'My father is born on the 29-Jul-1955.']);