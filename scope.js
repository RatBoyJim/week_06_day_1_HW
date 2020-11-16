//var
// var name = "Chris"
// var secretNumbers = function() {
//     var pinCode = [1, 1, 1, 1];
//     console.log('name inside function:', name);
// }

// secretNumbers();
// console.log('name from outside function:', name);


var filterNamesByFirstLetter = function(names, letter) {
    var filteredNames = [];
    for (var name of names) {
        if (name[0] === letter) {
            filteredNames.push(name);
        }
    }
    return filteredNames
};

var students = ["Kenny", "Katie", "Ian", "Chris"];
var filteredStudents = filterNamesByFirstLetter(students, "K");

console.log('filteredStudents:', filteredStudents);

let isItFive = function(num) {
    let result;
    if (num === 5) {
        result = true;
    } else {
        result = false;
    }
    return result;
}


const claculateEnergy = function(mass) {
    const speedOfLight = 299792458;
    return mass * speedOfLight ** 2;
}


let energyOfMe = claculateEnergy(75)
console.log('energyOfMe if I have a mass of 75Kg:', energyOfMe);

