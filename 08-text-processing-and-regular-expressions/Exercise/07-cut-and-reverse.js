function solve(input) {
    console.log(input
        .slice(0, input.length / 2)
        .split('')
        .reverse()
        .join(''));
    console.log(input
        .slice(input.length / 2, input.length)
        .split('')
        .reverse()
        .join(''));
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');