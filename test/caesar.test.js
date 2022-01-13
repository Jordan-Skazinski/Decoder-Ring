const expect = require("chai").expect;
const { caesar } = require("../src/caesar.js");
describe("Checking for correct input", () => {
  it("returns false if shift is 0", () => {
    const actual = caesar("message", 0);
    expect(actual).to.be.false;
  });
  it("returns false if shift is greater than 25", () => {
    const actual = caesar("message", 26);
    expect(actual).to.be.false;
  });
  it("returns false if shift is less than -25", () => {
    const actual = caesar("message", -26);
    expect(actual).to.be.false;
  })
})
describe("should keep symbols when given.", () => {
    it("Should return input with an !", ()=> {
        const actual = caesar("Hello!", -1)
        const expected = ("gdkkn!")
        expect(actual).to.equal(expected)
    })
    it("Should return input with an :)", ()=> {
        const actual = caesar("Smile:)", -1)
        const expected = ("rlhkd:)")
        expect(actual).to.equal(expected)
    })
    it("Should return input with an !@#$%^&*()", ()=> {
        const actual = caesar("!@#$%^&*()", -1)
        const expected = ("!@#$%^&*()")
        expect(actual).to.equal(expected)
    })
 
})


