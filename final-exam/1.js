function solve(input) {
    for (let line of input) {
        if (line === 'Last note') {
            break;
        }

        let [peak, coordinates] = line.split('=');
        let peakRegex = /^[a-zA-Z0-9!@#$?]+$/;

        if (peakRegex.test(peak)) {
            let peakFound = peak.replace(/[!@#$?]/g, '');
            let [geohashcodeLength, geohashcode] = coordinates.split('<<');
            let geohashcodeRegex = /^[0-9]+$/;

            if (geohashcodeRegex.test(geohashcodeLength) && +geohashcodeLength === geohashcode.length) {
                let coordinatesFound = geohashcode;

                console.log(`Coordinates found! ${peakFound} -> ${coordinatesFound}`);
            } else {
                console.log('Nothing found!');
            }
        } else {
            console.log('Nothing found!');
        }
    }
}

solve(['!@Ma?na?sl!u@=7<<tv58ycb4845',
    'E!ve?rest=.6<<tuvz26',
    '!K@2.,##$=4<<tvnd',
    '!Shiha@pan@gma##9<<tgfgegu67',
    '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
    'Last note']);
solve(['Ka?!#nch@@en@ju##nga@=3<<thfbghvn',
    '=9Cho?@#Oyu<<thvb7ydht',
    'Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6',
    'Dhau??la#gi@ri?!#=3<<bvnfhrtiuy',
    'Last note']);