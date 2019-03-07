function solve(arr) {
    let matrix = [];
    for (let i = 0; i < arr.length; i++) {
        matrix[i] = (arr[i].split(' '));
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = +matrix[i][j];
        }
    }

    let leftToRight = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === j) {
                leftToRight += matrix[i][j];
            }
        }
    }
    let rightToLeft = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i + j === matrix.length - 1) {
                rightToLeft += matrix[i][j];
            }
        }
    }
    if (leftToRight === rightToLeft) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if ((i + j === matrix.length - 1) || (i === j)) {
                   continue;
                } else{
                    matrix[i][j] = rightToLeft;
                }
            }
        }
    }
    matrix.forEach(row => console.log(row.join(' ')));    
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'])