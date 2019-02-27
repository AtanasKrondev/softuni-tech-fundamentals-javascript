function vacation(people, type, dayOfWeek) {
    let singlePrice = 0;
    switch (true) {
        case (type === 'Students' && dayOfWeek === 'Friday'):
            singlePrice = 8.45;
            break;
        case (type === 'Students' && dayOfWeek === 'Saturday'):
            singlePrice = 9.80;
            break;
        case (type === 'Students' && dayOfWeek === 'Sunday'):
            singlePrice = 10.46;
            break;
        case (type === 'Business' && dayOfWeek === 'Friday'):
            singlePrice = 10.90;
            break;
        case (type === 'Business' && dayOfWeek === 'Saturday'):
            singlePrice = 15.60;
            break;
        case (type === 'Business' && dayOfWeek === 'Sunday'):
            singlePrice = 16;
            break;
        case (type === 'Regular' && dayOfWeek === 'Friday'):
            singlePrice = 15;
            break;
        case (type === 'Regular' && dayOfWeek === 'Saturday'):
            singlePrice = 20;
            break;
        case (type === 'Regular' && dayOfWeek === 'Sunday'):
            singlePrice = 22.50;
            break;
    }
    let totalPrice = singlePrice * people;
    if (type === 'Students' && people >= 30) {
        totalPrice *=0.85;
    }
    if (type === 'Business' && people >= 100) {
        totalPrice -= singlePrice * 10;
    }
    if (type === 'Regular' && people >= 10 && people <= 20) {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation(40, 'Regular', 'Saturday');