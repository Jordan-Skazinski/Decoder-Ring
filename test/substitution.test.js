// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Test the requirements", () => {
  describe("return false stuff", () => {
    it("If no aplhabet, return false", () => {
      const message = "hello";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });

    it("If not 26 characters , return false.", () => {
      const message = "hello";
      const alphabet = "abc";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("If any characters are repeated return false", () => {
      const message = "hello";
      const alphabet = "theworldasweknowit";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("Test the Encode", () => {
    it("Encodes a msg with given alphabet", () => {
      const message = "hello";
      const alphabet = "zyxwvutsrqponmlkjihgfedcba";
      const actual = substitution(message, alphabet);
      const expected = "svool";

      expect(actual).to.equal(expected);
    });

    it("Testing all the special characters", () => {
      const message = "hello";
      const alphabet = "abcd!fg@ijk#mn$pqrstuvwxyz";
      const actual = substitution(message, alphabet);
      const expected = "@!##$";

      expect(actual).to.equal(expected);
    });

    it("Testing if spaces are kept", () => {
      const message = "why hello";
      const alphabet = "abcd!fg@ijk#mn$pqrstuvwxyz";
      const actual = substitution(message, alphabet);
      const expected = "w@y @!##$";

      expect(actual).to.equal(expected);
    });
  });

  describe("Test the decoder", () => {
    it("Decode a message when encode is false", () => {
      const message = "svool";
      const alphabet = "zyxwvutsrqponmlkjihgfedcba";
      const actual = substitution(message, alphabet, false);
      const expected = "hello";

      expect(actual).to.equal(expected);
    });

    it("Test the special characters", () => {
      const message = "@!##$";
      const alphabet = "abcd!fg@ijk#mn$pqrstuvwxyz";
      const actual = substitution(message, alphabet, false);
      const expected = "hello";

      expect(actual).to.equal(expected);
    });

    it("Test if spaces are kept", () => {
      const message = "w@y @!##$";
      const alphabet = "abcd!fg@ijk#mn$pqrstuvwxyz";
      const actual = substitution(message, alphabet, false);
      const expected = "why hello";

      expect(actual).to.equal(expected);
    });
  });
});
