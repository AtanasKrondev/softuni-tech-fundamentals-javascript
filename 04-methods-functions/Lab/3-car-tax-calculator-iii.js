function solve(type, volumeOrPower, age) {
    let totalTax = 0;
    let vehicleCoefficient = 1;
    if (type === 'motorcycle') {
        totalTax = calcultaeBaseMotorTax(volumeOrPower);
    } else {
        let baseTax = calcultaeBaseCarTax(volumeOrPower);
        let vehicleCoefficient = calculateCoefficient(age);
        totalTax = baseTax * vehicleCoefficient;
    }

    console.log(`${totalTax.toFixed(2)} lv.`);

    function calcultaeBaseCarTax(power) {
        let result = ''
        if (power <= 37) {
            result = power * 0.43;
        } else if (37 < power && power <= 55) {
            result = power * 0.50;
        } else if (55 < power && power <= 74) {
            result = power * 0.68;
        } else if (74 < power && power <= 110) {
            result = power * 1.38;
        } else {
            result = power * 1.54;
        }
        return result;
    }

    function calcultaeBaseMotorTax(volume) {
        if (volume > 750) {
            return 125;
        }
        if (volume > 490) {
            return 94;
        }
        if (volume > 350) {
            return 63;
        }
        if (volume > 250) {
            return 44;
        }
        if (volume > 125) {
            return 31;
        }
        return 15;
    }

    function calculateCoefficient(age) {
        let coefficient = 0;
        if (age < 5) {
            return 2.8;
        } if (5 <= age && age < 14) {
            return 1.5;
        } else; {
            return 1;
        }
    }
}

solve('motorcicle', 450, 10);