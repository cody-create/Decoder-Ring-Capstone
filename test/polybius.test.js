// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() submission tests written by Cody", () => {
  describe("encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const message = "word";
      const actual = polybius(message);
      const expected = "25432441";

      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const message = "jail";
      const actual = polybius(message);
      const expected = "42114213";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      const message = "a word";
      const actual = polybius(message);
      const expected = "11 25432441";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const message = "25432441";
      const actual = polybius(message, false);
      const expected = "word";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i' and 'j'", () => {
      const message = "42114213";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should leave spaces as is", () => {
      const message = "11 25432441";
      const actual = polybius(message, false);
      const expected = "a word";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
      const message = "2345 23513434112251412";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });
});
