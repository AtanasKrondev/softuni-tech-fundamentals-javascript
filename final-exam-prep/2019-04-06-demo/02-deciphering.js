function solve(input) {
    let [encryptedString, decipherKeys] = input;
    let regex = /^[d-z\{\}|#]+$/;

    if (regex.test(encryptedString)) {
        let [toReplace, replaceWith] = decipherKeys.split(' ');
        let regexObj = new RegExp(toReplace, 'g');

        let deciphered = encryptedString
            .split('')
            .map(e => String.fromCharCode(e.charCodeAt(0) - 3))
            .join('')
            .replace(regexObj, replaceWith);

        console.log(deciphered);
    } else {
        console.log('This is not the book you are looking for.');
    }
}

solve(['wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw',
    'ec an']);
solve(['arx#vkdww#qrw#sdvv', 't l']);