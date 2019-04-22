function solve(input) {

    for (let line of input) {
        if (line === 'end') {
            break;
        }

        let [artist, song] = line.split(':');

        if (!artistIsValid(artist) || !songIsValid(song)) {
            console.log('Invalid input!');
            continue;
        }

        let key = artist.length;
        let encrypted = '';

        for (let char of line) {
            if (char === ':') {
                encrypted += '@';
                continue;
            }

            if (char === ' ') {
                encrypted += ' ';
                continue;
            }

            if (char === '\'') {
                encrypted += '\'';
                continue;
            }

            let asciiCode = char.charCodeAt(0);

            if (asciiCode >= 65 && asciiCode <= 90) {
                asciiCode += key;
                if (asciiCode > 90) {
                    asciiCode -= 26;
                }
            }

            if (asciiCode >= 97 && asciiCode <= 122) {
                asciiCode += key;
                if (asciiCode > 122) {
                    asciiCode -= 26;
                }
            }

            encrypted += String.fromCharCode(asciiCode);
        }

        console.log(`Successful encryption: ${encrypted}`);
    }

    function artistIsValid(artist) {
        let firstCharCode = artist.charCodeAt(0);
        if (firstCharCode < 65 || firstCharCode > 90) {
            return false;
        }

        for (let i = 1; i < artist.length; i++) {
            let currentAsciiCode = artist.charCodeAt(i);
            if ((currentAsciiCode >= 97 && currentAsciiCode <= 122)
                || artist[i] === ' ' || artist[i] === '\'') {
                continue;
            } else {
                return false;
            }
        }

        return true;
    }
    function songIsValid(song) {
        for (let i = 0; i < song.length; i++) {
            let asciiCode = song.charCodeAt(i);

            if ((asciiCode >= 65 && asciiCode <= 90)
                || song[i] === ' ') {
                continue;
            } else {
                return false;
            }
        }

        return true;
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