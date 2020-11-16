const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
  const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);

  // The log show show `The murderer is Miss Scarlet' 
  // as the scenario variable is a constant and can be accessed by the declareMurderer function. 