function solve(text, command) {
    let namePatern = /(?<= )[A-Z][a-zA-Z]*-([A-Z][a-zA-Z]*\.-)?[A-Z][a-zA-Z]*(?= )/;
    let airportPatern = /(?<= )[A-Z]{3}\/[A-Z]{3}(?= )/;
    let flightPatern = /(?<= )[A-Z]{1,3}[0-9]{1,5}(?= )/;
    let companyPatern = /(?<=- )[A-Z][a-zA-Z]*\*[A-Z][a-zA-Z]*(?= )/;

    let name = text.match(namePatern)[0];
    name = name.replace(/-/g, ' ');

    let airport = text.match(airportPatern)[0];
    airport = airport.split('/');

    let flight = text.match(flightPatern)[0];

    let company = text.match(companyPatern)[0];
    company = company.replace('*', ' ');

    switch (command) {
        case 'name':
            console.log(`Mr/Ms, ${name}, have a nice flight!`);
            break;
        case 'flight':
            console.log(`Your flight number ${flight} is from ${airport[0]} to ${airport[1]}.`);
            break;
        case 'company':
            console.log(`Have a nice flight with ${company}.`);
            break;
        case 'all':
            console.log(`Mr/Ms, ${name}, your flight number ${flight} is from ${airport[0]} to ${airport[1]}. Have a nice flight with ${company}.`);
            break;
    }
}

solve('ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ', 'all');
solve(' TEST-T.-TESTOV   SOF/VIE OS806 - Austrian*Airlines T24G55 STD11:15 STA11:50 ', 'flight');