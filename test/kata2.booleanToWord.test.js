const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it ("returns Yes when passed true", () => {
  const result = booleanToWord(true)
  expect(result).toBe("Yes")
  });

  it ("returns No when passed false", () => {
  const result = booleanToWord(false)
  expect(result).toBe("No");
  });
});
