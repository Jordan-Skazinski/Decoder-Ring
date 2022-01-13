const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Teesting Polybuis", () => {
  describe("Test the Encoder", () => {
    it("Encode letters into a pair of numbers", () => {
      const message = "hello";
      const actual = polybius(message);
      const expected = "3251131343";

      expect(actual).to.equal(expected);
    });

    it("Test if both i and j are 42", () => {
      const message = "jijiji";
      const actual = polybius(message);
      const expected = "424242424242";

      expect(actual).to.equal(expected);
    });

    it("Test if spaces are kept", () => {
      const message = "why hello";
      const actual = polybius(message);
      const expected = "253245 3251131343";

      expect(actual).to.equal(expected);
    });
  });

  describe("Testing the decoder", () => {
    it("Does it decode?", () => {
      const message = "3251131343";
      const actual = polybius(message, false);
      const expected = "hello";

      expect(actual).to.equal(expected);
    });

    it("42 should show as 'i/j'", () => {
      const message = "42";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("Tests if spaces are kept", () => {
      const message = "253245 3251131343";
      const actual = polybius(message, false);
      const expected = "why hello";

      expect(actual).to.equal(expected);
    });

    it("Tests if all numbers are pairs, if not return false.", () => {
      const message = "253245 3251131343 1";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });
});
