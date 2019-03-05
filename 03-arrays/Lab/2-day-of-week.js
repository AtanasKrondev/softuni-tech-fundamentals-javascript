function solve(num) {
    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    if (1 <= num && num <= 7) {
        console.log(days[num - 1]);
    } else {
        console.log('Invalid day!');
    }
}

solve(3);