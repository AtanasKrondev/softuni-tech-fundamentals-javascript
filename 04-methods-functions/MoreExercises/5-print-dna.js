function solve(length) {
    let patern = 'ATCGTTAGGG';
    let leftLetter = 0;
    let rightLetter = 1;

    for (let i = 1; i <= length; i++) {
        paternDraw(i);

        leftLetter += 2;
        rightLetter += 2;
        if (leftLetter >= 10) {
            leftLetter -= 10;
        }
        if (rightLetter >= 10) {
            rightLetter -= 10;
        }
    }

    function paternDraw(i) {
        let drawLine = '';
        if (i % 4 === 1) {
            drawLine = `**${patern[leftLetter]}${patern[rightLetter]}**`;
        } else if (i % 4 === 3) {
            drawLine = `${patern[leftLetter]}----${patern[rightLetter]}`;
        } else {
            drawLine = `*${patern[leftLetter]}--${patern[rightLetter]}*`;
        }
        console.log(drawLine);
    }
}

solve(10);