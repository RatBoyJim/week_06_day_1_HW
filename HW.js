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


  const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// The log should show 'The murderer is Professor Plum' 
// as the murderer variable is a constant and cannot be changed.
// Or it will just return an error.