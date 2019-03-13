function solve(stringInput) {

    function splitTheString(stringInput) {
        let splitSentence = stringInput.split(/\W+/);

        for (let i = 0; i < splitSentence.length; i++) {
            if (splitSentence[i].length === 0) {
                splitSentence.splice(i, 1);
            }
        }
        return splitSentence;
    }

    function findShortestAndLongest(splitSentence) {
        let min = Number.MAX_SAFE_INTEGER;
        let max = Number.MIN_SAFE_INTEGER;
        let minSymbols = '';
        let maxSymbols = '';

        for (let i = 0; i < splitSentence.length; i++) {
            if (splitSentence[i].length < min) {
                min = splitSentence[i].length;
                minSymbols = splitSentence[i];
            }
            if (splitSentence[i].length > max) {
                max = splitSentence[i].length;
                maxSymbols = splitSentence[i];
            }
        }

        console.log(`Longest -> ${maxSymbols}`);
        console.log(`Shortest -> ${minSymbols}`);

    }

    let splitSentence = splitTheString(stringInput);
    findShortestAndLongest(splitSentence);
}

solve('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');