function solve(input) {
    let desiredThickness = input[0];
    for (let i = 1; i < input.length; i++) {
        let oreThicknes = input[i];
        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;
        console.log(`Processing chunk ${oreThicknes} microns`);

        while (oreThicknes / 4 >= desiredThickness - 1) {
            oreThicknes /= 4;
            cutCount++;
        }

        printTransportAndWash('Cut', cutCount, oreThicknes);

        while (oreThicknes * 0.8 >= desiredThickness - 1) {
            oreThicknes *= 0.8;
            lapCount++;
        }

        printTransportAndWash('Lap', lapCount, oreThicknes);

        while (oreThicknes - 20 >= desiredThickness - 1) {
            oreThicknes -= 20;
            grindCount++;
        }

        printTransportAndWash('Grind', grindCount, oreThicknes);

        while (oreThicknes - 2 >= desiredThickness - 1) {
            oreThicknes -= 2;
            etchCount++;
        }

        printTransportAndWash('Etch', etchCount, oreThicknes);

        if (oreThicknes === desiredThickness - 1) {
            oreThicknes += 1;
            console.log('X-ray x1');
        }

        console.log(`Finished crystal ${oreThicknes} microns`);        
    }

    function printTransportAndWash(operation, count, oreThicknes) {
        if (count > 0) {
            console.log(`${operation} x${count}`);
            oreThicknes = Math.floor(oreThicknes);
            console.log('Transporting and washing');
        }
    }

}

solve([1375, 50000]);