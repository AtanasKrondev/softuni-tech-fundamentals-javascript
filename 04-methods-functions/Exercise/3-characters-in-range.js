function charsInRange(startChar, endChar) {

    let start = startChar.charCodeAt(0);
    let end = endChar.charCodeAt(0);
    let charsInRange = [];

    if (end < start) {
        let temp = start;
        start = end;
        end = temp;
    }

    for (let i = start + 1; i < end; i++) {
        charsInRange.push(String.fromCharCode(i))
    }

    console.log(charsInRange.join(' '));
}

charsInRange('#', ':');