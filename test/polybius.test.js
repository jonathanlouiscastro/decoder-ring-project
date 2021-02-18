// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("polybius", () => {
    it("Should return a correctly encoded message", () => {
        expected = polybius("thinkful");
        expect(expected).to.equal("4432423352125413"); // No error
    });
    it("Should return a correctly encoded message with spaces", () => {
        expected = polybius("Hello world");
        expect(expected).to.equal("3251131343 2543241341"); // No error
    });
    it("Should return a correctly decoded message with spaces", () => {
        expected = polybius("3251131343 2543241341", false);
        expect(expected).to.equal("hello world"); // No error
    });
    it("Should return a correctly decoded message when translatinig 42 to both i and j", () => {
        expected = polybius("4432423352125413", false);
        expect(expected).to.equal("th(i/j)nkful"); // No error
    });
    it("Should return false if the length of all numbers is odd", () => {
        expected = polybius("44324233521254134", false);
        expect(expected).to.equal(false); // No error
    });
});