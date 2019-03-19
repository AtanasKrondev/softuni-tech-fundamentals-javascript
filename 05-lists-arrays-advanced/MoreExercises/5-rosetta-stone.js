function stoneDecoder(input) {

    function fillMatrix(input, length) {
        let matrix = [];
        for (let i = 0; i < length; i++) {
            matrix.push(input.shift().split(' ').map(Number));
        }
        return matrix;
    }

    function decoding(num) {
        let ch = String.fromCharCode((num % 27) + 64);
        if (ch === '@') {
            ch = ' ';
        }
        return ch;
    }

    let templateLength = +input.shift();
    let templateDecoder = fillMatrix(input, templateLength);
    let templateWidth = templateDecoder[0].length
    let messageMatrix = fillMatrix(input, input.length);
    let result = [];

    for (let row = 0; row < messageMatrix.length; row++) {
        for (let col = 0; col < messageMatrix[row].length; col++) {
            messageMatrix[row][col] += templateDecoder[row % templateLength][col % templateWidth];
        }
    }

    for (let row = 0; row < messageMatrix.length; row++) {
        for (let col = 0; col < messageMatrix[row].length; col++) {
            result.push(decoding(messageMatrix[row][col]));
        }
    }
    console.log(result.join(''));
}

stoneDecoder(['1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0'])