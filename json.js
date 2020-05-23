var singer = {
    name: "A$ap Rocky",
    loving : 'flacko jodye',
    songs: {
        song: [
        {
            title: 'babushka boi',
            year: 2019
        },
        {
            title: 'og beeper',
            year : 2018
        }]
    }
}

var str = JSON.stringify(singer);
console.log(str);
console.log(typeof str);//string

var parsed = JSON.parse(str);
console.log(parsed);
console.log(typeof parsed);//object

console.log(parsed.songs.song[0].title);


