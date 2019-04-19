function solve(input) {
    input.pop();
    let timeDishes = 0;
    let timeCleaning = 0;
    let timeLaundry = 0;
    let totalMinutes = 0;

    let dishesPatern = /(?<=<)[a-z0-9]+(?=>)/;
    let cleaningPatern = /(?<=\[)[A-Z0-9]+(?=])/;
    let laundryPatern = /(?<={).+(?=})/;

    for (let inputRow of input) {
        let dishesRegex = dishesPatern.exec(inputRow);
        let cleaningRegex = cleaningPatern.exec(inputRow);
        let laundryRegex = laundryPatern.exec(inputRow);

        let pattern = /\d/g;

        if (dishesRegex !== null) {
            let string = dishesRegex[0];
            let num = string.match(pattern)
                .map(e => +e)
                .reduce((a, b) => a + b);
            timeDishes += num;
        } else if (cleaningRegex !== null) {
            let string = cleaningRegex[0];
            let num = string.match(pattern)
                .map(e => +e)
                .reduce((a, b) => a + b);
            timeCleaning += num;
        } else if (laundryRegex !== null) {
            let string = laundryRegex[0];
            let num = string.match(pattern)
                .map(e => +e)
                .reduce((a, b) => a + b);
            timeLaundry += num;
        }
    }

    totalMinutes = timeDishes + timeLaundry + timeCleaning;

    console.log(`Doing the dishes - ${timeDishes} min.`);
    console.log(`Cleaning the house - ${timeCleaning} min.`);
    console.log(`Doing the laundry - ${timeLaundry} min.`);
    console.log(`Total - ${totalMinutes} min.`);
}

solve(['-^hr5a65j48<dd6f5h4dhfd>456sga_+',
    'DHdhy4*3[T2HOU87KRC]sA/@',
    'Sda%t]gf{%hjK8f34)!fG1re}-+htG%v',
    'wife is happy',
    '']);

solve(['Vo.|1zps {lo2a}zgVGk{1)N+',
    'Asdad123zxc{3]',
    'R[A [F67G9C]6e3C@',
    'MVo.|1zpshM<9) <d85ifkh59votu>@',
    '<dm0g2y34mw1kpds2>iD|"p',
    'wife is happy']);