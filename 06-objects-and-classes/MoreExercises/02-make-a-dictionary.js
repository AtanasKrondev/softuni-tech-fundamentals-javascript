function solve(input) {
    let dictionary = {};

    for (let inputRow of input) {
        let thisRow = Object.entries(JSON.parse(inputRow));
        dictionary[thisRow[0][0]] = thisRow[0][1];
    }

    let sortedDictionary = Object.entries(dictionary)
        .sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()));

    for (let [term, definition] of sortedDictionary) {
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}

solve(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);