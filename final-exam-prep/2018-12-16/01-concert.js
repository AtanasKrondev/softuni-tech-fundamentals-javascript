function solve(input) {
    let concert = {};
    let bandToList = input.pop();
    input.pop();

    for (let inputRow of input) {
        let [command, band, values] = inputRow.split('; ');
        if (!concert.hasOwnProperty(band)) {
            concert[band] = {
                time: 0,
                members: []
            }
        }

        switch (command) {
            case 'Add':
                values = values.split(', ');
                for (let member of values) {
                    if (!concert[band].members.includes(member)) {
                        concert[band].members.push(member);
                    }
                }
                break;

            case 'Play':
                values = +values;
                concert[band].time += values;
                break;
        }

    }

    let concertArr = Object.entries(concert)
        .sort((a, b) => b[1].time - a[1].time || a[0].localeCompare(b[0]));

    let totalTime = concertArr
        .map(e => e = e[1].time)
        .reduce((a, b) => a + b);

    console.log(`Total time: ${totalTime}`);

    for (let band of concertArr) {
        console.log(`${band[0]} -> ${band[1].time}`);
    }

    console.log(bandToList);
    concert[bandToList].members.forEach(e => console.log(`=> ${e}`));
}


solve(['Add; The Beatles; John Lennon',
    'Add; The Beatles; John Lennon',
    'Add; The Beatles; John Lennon',
    'Play; HOI; 3698',
    'Play; The Beatles; 3698',
    'start of concert',
    'The Beatles']);