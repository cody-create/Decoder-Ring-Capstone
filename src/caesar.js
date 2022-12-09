// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    let lookup = "abcdefghijklmnopqrstuvwxyz";
    //            0123456789  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
    let newWord = "";
    // check if shift is valid
    if (shift === 0 || shift > 25 || shift < -25) {
      return false;
    } else {
      if (encode === false) {
        shift = 0 - shift;
      }
      //handles capital letters
      const lowerInput = input.toLowerCase();
      // shifts char by given amount
      for (let i = 0; i < lowerInput.length; i++) {
        let shiftedIndex = lookup.indexOf(lowerInput[i]) + shift;
        // handles non letter chars
        if (lookup.includes(lowerInput[i])) {
          // handles end of alphabet
          if (shiftedIndex > 25) {
            const resetIndex = lookup.indexOf(lowerInput[i]) + shift;
            shiftedIndex = resetIndex - 26;
          }
          if (shiftedIndex < 0) {
            const resetIndex = lookup.indexOf(lowerInput[i]) + shift;
            shiftedIndex = resetIndex + 26;
          }
          newWord += lookup.charAt(shiftedIndex);
        } else {
          newWord += lowerInput[i];
        }
      }
      return newWord;
    }
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
