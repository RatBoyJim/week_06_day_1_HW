// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);

  // The log should show `The murderer is Miss Scarlet' 
  // as the scenario variable is a constant and can be accessed by the declareMurderer function.


//   const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// The log should show 'The murderer is Professor Plum' 
// as the murderer variable is a constant and cannot be changed.
// Or it will just return an error.

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// The firstVerdict will show "The murderer is Mrs. Peacock"
// as this is the variable passed into declareMurderer.
// The second verdict will show "The murderer is Professor Plum"
// as this is the only murderer variable accessible to secondVerdict.

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// The console will show "Miss Scarlet, Proffessor Plum, Colonel Mustard
// as Mustard is the third suspect available to the declareAllSuspects method.
// The console will then state "Suspect three is Mrs.Peacock" as Mustard is 
// only available to the declareAllSuspects method.

