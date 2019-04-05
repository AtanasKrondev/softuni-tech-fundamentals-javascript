function solve(input) {
    let base = { name: 'BASE', regex: /^[A-Z]+\d{4,}/g, state: '' };
    let middle = { name: 'MIDDLE', regex: /^[a-zA-z]{3,}[@#$%]+/g, state: '' };
    let top = { name: 'TOP', regex: /^0+[a-z]{1,5}/g, state: '' };
    let stageElements = input.length / 3;
    let count = 0;
    let stage = base;

    for (let lair of input) {
        count++;
        solidOrWeak(lair, stage);
        if (count === stageElements && stage === base) {
            count = 0;
            stage = middle;
        }
        if (count === stageElements && stage === middle) {
            count = 0;
            stage = top;
        }
    }

    function solidOrWeak(lair, stage) {
        let match = '';
        while ((match = lair.match(stage.regex)) !== null) {
            lair = lair.replace(match[0], '');
        }
        if (lair === '') {
            stage.state = 'SOLID';
        } else {
            stage.state = 'WEAK';
        }
        console.log(`${stage.state} ${stage.name}!`);
    }
}

solve(['SO9000STRONG10WALL7000', 'YES345345345PLEASEHAHA999999',
    'xaXAxa###MiDDlE%%$##', 'mM%%%%ImRichGuy$$$$$',
    '00000cant0do000that', '0sorry00happy000saaaad'])