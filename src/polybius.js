// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  // create an array of objects with letters as keys and cordinates as values

  function polybius(input, encode = true) {
    // Created an array of objects to reference when encripting and decripting messages 
    const alphaArray = [
      {letter: "a", number: 11},{letter: "b", number: 21},{letter: "c", number: 31},{letter: "d", number: 41},{letter: "e", number: 51},
      {letter: "f", number: 12},{letter: "g", number: 22},{letter: "h", number: 32},{letter: "i", number: 42},{letter: "j", number: 42},
      {letter: "k", number: 52},{letter: "l", number: 13},{letter: "m", number: 23},{letter: "n", number: 33},{letter: "o", number: 43},
      {letter: "p", number: 53},{letter: "q", number: 14},{letter: "r", number: 24},{letter: "s", number: 34},{letter: "t", number: 44},
      {letter: "u", number: 54},{letter: "v", number: 15},{letter: "w", number: 25},{letter: "x", number: 35},{letter: "y", number: 45},
      {letter: "z", number: 55},{letter: " ", number: 0}
    ]
    // Creating variables to use through the program 
    let result = "";
    let message = input.toLowerCase();
    let charNum = 0;
    // Checking if the input needs to be decoded or encoded 
    if(encode === true) {
      for(let i = 0; i < message.length; i++){
        // Creating variables to within the for loop
        let checkChar = message.charCodeAt(i);
        charNum = message[i];
        //Checks if there are spaces and then matches letters to the correct number
        if (checkChar != 32){
        const matchingCharacter = alphaArray.find(element => element.letter === message[i])
        // Adds the matching character to the result string
        charNum = matchingCharacter.number;
        }
        // Adds the spaces 
        result += charNum; 
    }
    } 
    
    else {
      let groupByTwo = [];
      let numChar = input.split("");
      
      //if (numChar.join("") % 2 != 0) return false;
      //Groups the numbers into pairs
      do {
        let test = numChar[0];
        if (test != ' ') {
          groupByTwo.push(numChar.splice(0,2).join(""));
        } else {
          groupByTwo.push(' ');
          numChar.shift();
        } 
      } while (numChar.length > 0)
      
    
      let checkChar = 0;
      for (let i = 0; i < groupByTwo.length; i++){
        //Checks for pair numbers 
        if (groupByTwo[i] === " " || groupByTwo[i] >= 11){
          // Converts the number pairs into the correct letters
          if (groupByTwo[i] != 42){
            const matchingPair = alphaArray.find(element => element.number == groupByTwo[i])
            checkChar = matchingPair.letter;
            console.log(checkChar);
            result += checkChar; 
          } else{
            checkChar = "(i/j)"
            result += checkChar; 
          }
        } 
        // Returns false if the number pair was a single digit 
        else {
          return false; 
        }
      }
    }
    return result;
  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
