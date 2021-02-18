// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {

    let meessage = input.toLowerCase();
    let result = "";
    //Check for invalid inputs for shift 
    if(shift === 0 || shift < -25 || shift > 25 || !shift) return false;
    //Checks if encode is false if so turns the shift to a negative number
    if (!encode) {shift *= -1;}

    for (let i = 0; i < message.length; i++){
      let updatedCharacter = message[i];
      let charCode = message.charCodeAt(i);
      //Checks for just lower case characters and adds the shift to them 
      if (charCode >= 97 && charCode <= 122){
        charCode += shift; 
        //If the numbers moves outside the lower range it moves it within range 
        if (charCode < 97){
          charCode += 26; 
        }
        //If the numbers moves outside the upper range it moves it within range 
        else if (charCode > 122){
          charCode -= 26;
        }
          //Converts the charCode back to a letter
          updatedCharacter = String.fromCharCode(charCode);
      }
        result += updatedCharacter; 
      }
    return result; 
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;

