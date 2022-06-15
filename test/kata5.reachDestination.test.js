const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect (reachDestination(44, 10)).toEqual("I should be there in 4.5 hour(s)");
    expect (reachDestination(100, 40)).toEqual("I should be there in 2.5 hour(s)");
    expect (reachDestination(5, 6)).toEqual("I should be there in 1.0 hour(s)");
  });
});
