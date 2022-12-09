const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() submission tests written by Cody", () => {
  describe("error handling", () => {
    it("should return false if the shift amount is 0", () => {
      const message = "word";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is above 25", () => {
      const message = "word";
      const shift = 26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
      const message = "word";
      const shift = -26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by shifting the letters", () => {
      const message = "word";
      const shift = 2;
      const actual = caesar(message, shift);
      const expected = "yqtf";

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
      const message = "a word.";
      const shift = 2;
      const actual = caesar(message, shift);
      const expected = "c yqtf.";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "A word";
      const shift = 2;
      const actual = caesar(message, shift);
      const expected = "c yqtf";

      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      const message = "word";
      const shift = 4;
      const actual = caesar(message, shift);
      const expected = "asvh";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const message = "word";
      const shift = -2;
      const actual = caesar(message, shift);
      const expected = "umpb";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
      const message = "yqtf";
      const shift = 2;
      const actual = caesar(message, shift, false);
      const expected = "word";

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
      const message = "c yqtf.";
      const shift = 2;
      const actual = caesar(message, shift, false);
      const expected = "a word.";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "C yqtf";
      const shift = 2;
      const actual = caesar(message, shift, false);
      const expected = "a word";

      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      const message = "asvh";
      const shift = 4;
      const actual = caesar(message, shift, false);
      const expected = "word";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const message = "umpb";
      const shift = -2;
      const actual = caesar(message, shift, false);
      const expected = "word";

      expect(actual).to.equal(expected);
    });
  });
});
