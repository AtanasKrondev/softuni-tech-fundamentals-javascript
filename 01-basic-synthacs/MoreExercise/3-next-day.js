function solve(year, month, day) {
    let date = new Date(year, month - 1, day + 1);
    let datestring = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    console.log(datestring);
}

solve(2016, 9, 30);