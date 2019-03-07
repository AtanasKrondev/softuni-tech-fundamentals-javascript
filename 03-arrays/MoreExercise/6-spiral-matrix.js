function solve(length, width) {
    let rows = +length;
    let cols = +width;
    let count = 0;
    let maxCount = rows * cols;
    let minRow = 0;
    let minCol = 0;
    let maxRow = rows - 1;
    let maxCol = cols - 1;
    let matrix = [];
        for (let r = 0; r < rows; r++) matrix[r] = [];
        while (count < maxCount) {
            for (let c = minCol; c <= maxCol && count < maxCount; c++)	matrix[minRow][c] = ++count;
            minRow++;
            for (let r = minRow; r <= maxRow && count < maxCount; r++)	matrix[r][maxCol] = ++count;
            maxCol--;
            for (let c = maxCol; c >= minCol && count < maxCount; c--)	matrix[maxRow][c] = ++count;
            maxRow--;
            for (let r = maxRow; r >= minRow && count < maxCount; r--)	matrix[r][minCol] = ++count;
            minCol++;
        }
    matrix.forEach(row => console.log(row.join(' ')));
}

solve(5, 7);