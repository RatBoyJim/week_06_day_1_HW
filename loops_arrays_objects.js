// Arrays - unordered collections using index positions (lists in Python)
// Objects - unordered collections using key-value pairings (dicts in Python)
// loops


// ARRAYS

var sports = ["football", "tennis", "rugby"];

// console.log(sports);
// console.log(sports.length);
// console.log(sports[0]);

// var firstSport = sports[0];

// console.log(firstSport);
// console.log("first sport:", firstSport);

// sports.push("curling");
// sports.push("snooker");
// sports.push("darts");
// console.log("sports:", sports);
// sports.pop();
// console.log("sports:", sports);

// var removedSport = sports.pop();

// console.log("removed sport:", removedSport);

// sports.unshift("basketball");
// console.log("sports", sports);

// var removedFromStart = sports.shift();
// console.log("removed from start:", removedFromStart);

// console.log(sports);

// console.log(sports);

// var removedSport = sports.splice(1, 1)
// console.log("sports:", sports);
// console.log("removed sport:", removedSport);

// console.log("sports:", sports);

// var removeWODelete = sports.splice(1, 0, "ice hockey");
// console.log(sports);
// var removeWDelete = sports.splice(1, 1, "badminton");
// console.log(sports);


// LOOPS

for (var currentSport of sports){
    var upperCasedSport = currentSport.toUpperCase();
    console.log(upperCasedSport);
}

console.log('----');

// for initialise counter; condition (true/false); increment counter (+1) GIVES MORE CONTROL
for (var i = 0; i < sports.length; i++){
    var currentSport = sports[i];
    var upperCasedSport = currentSport.toUpperCase();
    console.log(upperCasedSport);
}

console.log('----');

for (var i = sports.length -1; i>= 0; i--){
    var currentSport = sports[i];
    var upperCasedSport = currentSport.toUpperCase();
    console.log(upperCasedSport);
}

// OBJECTS

var movie = {
    title: "It's a wonderful Life",
    year: 1946,
    language: "Spanish"
};

console.log(movie);

var title = movie.title;
console.log("movie title:", title);

movie.cast = ["James Stewart", "Donna Reed"];
console.log("Movie:", movie);

movie.language = "English";
movie.cast.push("Yer Maw");
movie["subtitle-language"] = "Spanish";
console.log("Movie", movie);

delete movie.year;
console.log("Movie:", movie);

movie.ratings = {
    critic: 94,
    audience: 95
};

console.log(movie);
console.log(movie.ratings.audience);

for (var key in movie){
    var value = movie[key];
    console.log(`The ${key} is ${value}`);
};

var keys = Object.keys(movie)
console.log("Keys:", keys);