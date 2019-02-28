function solve(theDistance,thePassengers,thePrice) {
    let distance = theDistance;
    let passengers = thePassengers;
    let price = thePrice;
    let neededFuel = (distance / 100) * 7;
    neededFuel += passengers * 0.1;
    let money = neededFuel * price;
    console.log(`Needed money for that trip is ${money}lv.`);    
}

solve(260, 9, 2.49);