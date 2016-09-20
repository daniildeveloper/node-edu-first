var fs = require('fs');

//now read file async
fs.readFile('data/input.txt', function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data.toString());
});
console.log("programm ended.");

// //read synchronous file
// var data = fs.readFileSync('data/input.txt');
// //print after file is readed
// console.log(data.toString());
// console.log("programm ended. Read sync");