// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    // verify that alphabet is valid
    if (!alphabet || alphabet.length !== 26) return false;
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet.split(alphabet[i]).length > 2) return false;
    }

    const normalAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let newMessage = "";
    const lowerInput = input.toLowerCase();
    if (encode) {
      for (let i = 0; i < lowerInput.length; i++) {
        let indexOfInput = normalAlphabet.indexOf(lowerInput[i]);
        if (lowerInput[i] === " ") {
          newMessage += lowerInput[i];
        }
        // console.log(indexOfInput);
        for (let j = 0; j < alphabet.length; j++) {
          if (indexOfInput === j) {
            newMessage += alphabet[j];
          }
        }
      }
    } else {
      for (let i = 0; i < lowerInput.length; i++) {
        let indexOfInput = alphabet.indexOf(lowerInput[i]);
        if (lowerInput[i] === " ") {
          newMessage += lowerInput[i];
        }
        for (let j = 0; j < normalAlphabet.length; j++) {
          if (indexOfInput === j) {
            newMessage += normalAlphabet[j];
          }
        }
      }
    }
    return newMessage;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
