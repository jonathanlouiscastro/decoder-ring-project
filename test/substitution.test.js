// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution", () => {
    it("Should return a correctly encoded message", () => {
        expected = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(expected).to.equal("jrufscpw"); // No error
    });
    it("Should return a correctly encode message with spaces", () => {
        expected = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(expected).to.equal("elp xhm xf mbymwwmfj dne"); // No error
    });
    it("Should return a correctly decoded message", () => {
        expected = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(expected).to.equal("thinkful"); // No error
    });
    it("Should return a correctly encoded message using unique characters", () => {
        expected = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(expected).to.equal("y&ii$r&"); // No error
    });
    it("Should return a correctly edcoded message using unique characters", () => {
        expected = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(expected).to.equal("message"); // No error
    });
    it("Should return false if alphabet is 26 characters", () => {
        expected = substitution("thinkful", "short");
        expect(expected).to.equal(false); // No error
    });
    it("Should return false if alphabet has duplicate characters", () => {
        expected = substitution("thinkful", "abcabcabcabcabcabcabcabcyz", false);
        expect(expected).to.equal(false); // No error
    });
    
});