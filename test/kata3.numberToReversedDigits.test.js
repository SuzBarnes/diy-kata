const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it ("returns a reversed array of the number's digits", () => {

expect (numberToReversedDigits(12345)).toStrictEqual([5,4,3,2,1])
expect (numberToReversedDigits(9876)).toStrictEqual([6,7,8,9])

  });
});
