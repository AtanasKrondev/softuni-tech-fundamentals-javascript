function solve(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numberOfSongs = input.shift();
    let typeOfSong = input.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = input[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (typeOfSong === 'all') {
        songs.forEach(e => console.log(e.name));
    } else {
        let filtered = songs.filter(e => e.type === typeOfSong);
        filtered.forEach(e => console.log(e.name));
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);