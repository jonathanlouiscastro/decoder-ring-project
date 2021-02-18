// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("Should return a correctly encoded message when using a postive shift", () => {
        expected = caesar("thinkful", 3);
        expect(expected).to.equal("wklqnixo"); // No error
    });
    it("Should return a correctly encoded message when using a negative shift", () => {
        expected = caesar("thinkful", -3);
        expect(expected).to.equal("qefkhcri"); // No error
    });
    it("Should return a correctly decoded message when using a postive shift", () => {
        expected = caesar("This is a secret message!", 8);
        expect(expected).to.equal("bpqa qa i amkzmb umaaiom!"); // No error
    });
    it("Should return a correctly decoded message when using a postive shift", () => {
        expected = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(expected).to.equal("this is a secret message!"); // No error
    });
    it("Should return a correctly decoded message when using a positive shift", () => {
        expected = caesar("wklqnixo", 3, false);
        expect(expected).to.equal("thinkful"); // No error
    });
    it("Should return a correctly decoded message when using a negative shift", () => {
        expected = caesar("qefkhcri", -3, false);
        expect(expected).to.equal("thinkful"); // No error
    });
    it("Should return false when give a shift value of 0", () => {
        expected = caesar("thinkful", 0);
        expect(expected).to.equal(false); // No error
    });
    it("Should return false when give no value for shift is given", () => {
        expected = caesar("thinkful");
        expect(expected).to.equal(false); // No error
    });
    it("Should return false when give a shift value greater than 25", () => {
        expected = caesar("thinkful", 99);
        expect(expected).to.equal(false); // No error
    });
    it("Should return false when give a shift value less than -25", () => {
        expected = caesar("thinkful", -26);
        expect(expected).to.equal(false); // No error
    });
  });