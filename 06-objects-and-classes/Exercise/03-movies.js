function solve(input) {
    let movies = [];

    for (let inputRow of input) {
        if (inputRow.includes('add movie')) {
            let token = inputRow.split('add movie ');
            let movieName = token[1];
            addMovie(movieName);
        } else if (inputRow.includes(' directed by ')) {
            let [movieName, directorName] = inputRow.split(' directed by ');
            addDirector(movieName, directorName);
        } else {
            let [movieName, date] = inputRow.split(' on date ');
            addDate(movieName, date)
        }
    }

    for (let m of movies) {
        if (m.hasOwnProperty('name') && m.hasOwnProperty('director') && m.hasOwnProperty('date')) {
            console.log(JSON.stringify(m));
        }
    }

    function addMovie(movieName) {
        movies.push({ name: movieName });
    }

    function addDirector(movieName, directorName) {
        let foundMovie = movies.
            find(m => m.name === movieName);

        if (foundMovie) {
            foundMovie.director = directorName;
        }
    }

    function addDate(movieName, date) {
        let foundMovie = movies.
            find(m => m.name === movieName);

        if (foundMovie) {
            foundMovie.date = date;
        }
    }
}

solve(['add movie Fast and Furious',
    'add movie Godfather',
    'Inception directed by Christopher Nolan',
    'Godfather directed by Francis Ford Coppola',
    'Godfather on date 29.07.2018',
    'Fast and Furious on date 30.07.2018',
    'Batman on date 01.08.2018',
    'Fast and Furious directed by Rob Cohen'])