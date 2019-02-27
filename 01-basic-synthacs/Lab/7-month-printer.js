function monthPrinter(m) {
    if (m < 1 || m > 12) {
        console.log('Error!')
    }
    else {
        let month = new Array();
        month[1] = "January";
        month[2] = "February";
        month[3] = "March";
        month[4] = "April";
        month[5] = "May";
        month[6] = "June";
        month[7] = "July";
        month[8] = "August";
        month[9] = "September";
        month[10] = "October";
        month[11] = "November";
        month[12] = "December";
        let n = month[m];
        console.log(n);
    }
}
monthPrinter(13);