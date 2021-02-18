// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // Helper function to check if alphabet contains duplicate letters 
  function isUnique (alphabet) {
    let checkUniq = alphabet.split('');
    return (new Set(checkUniq)).size !== checkUniq.length;
  }

  function substitution(input, alphabet, encode = true) {
    //Set conditions to handle improper inputs 
    if(!alphabet || alphabet.length != 26 || isUnique(alphabet)) return false;

    //Set variables 
    console.log(isUnique(alphabet));
    const subAlphaArr = alphabet.split('');
    let message = input.toLowerCase().split("");
    let encodedMessage = "";
    alphaArr = "abcdefghijklmnopqrstuvwxyz".split("");

    //Encodes the message 
    if (encode) {
      message.forEach((index =>{
        if (alphaArr.includes(index)){
          encodedMessage += subAlphaArr[alphaArr.indexOf(index)];
          console.log(encodedMessage);
        } else {
          encodedMessage += index;
        }
      }))
    //Decodes the message 
    } else {
        message.forEach(index => {
          if (subAlphaArr.includes(index)) {
            encodedMessage += alphaArr[subAlphaArr.indexOf(index)];
          } else {
            encodedMessage += index;
          }
        });
    }

    return encodedMessage; 
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
