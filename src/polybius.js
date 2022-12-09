// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    let noSpaces = input.split(" ").join("");
    if (encode === false && noSpaces.length % 2 === 1) {
      return false;
    }
    lookup = {
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32,
      i: 42,
      j: 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55,
    };
    decodeLookup = {
      11: "a",
      21: "b",
      31: "c",
      41: "d",
      51: "e",
      12: "f",
      22: "g",
      32: "h",
      42: "(i/j)",
      52: "k",
      13: "l",
      23: "m",
      33: "n",
      43: "o",
      53: "p",
      14: "q",
      24: "r",
      34: "s",
      44: "t",
      54: "u",
      15: "v",
      25: "w",
      35: "x",
      45: "y",
      55: "z",
    };
    // account for case
    const lowerInput = input.toLowerCase();
    let newMessage = "";

    if (encode) {
      for (let i = 0; i < lowerInput.length; i++) {
        for (let key in lookup) {
          if (key === lowerInput[i]) {
            newMessage += lookup[key];
          }
        }
        if (lowerInput[i] === " ") {
          newMessage += lowerInput[i];
        }
      }
    } else {
      for (let i = 0; i < input.length; i++) {
        let doubleNum = input[i] + input[i + 1];
        for (let key in decodeLookup) {
          if (key === doubleNum) {
            newMessage += decodeLookup[key];
          }
        }

        if (input[i] === " ") {
          newMessage += input[i];
        } else {
          i++;
        }
      }
    }
    return newMessage;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
