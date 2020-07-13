import { app } from "../src/app";
import { totalFuel } from "../src/app";
import { pairs } from "../src/app";
import { sum } from "../src/2018";
import { splitStr } from "../src/2018";

test("the app initializes", () => {
  expect(app.mountpath).toBe("/");
});

describe("totalFuel", () => {
  describe("given several numeric parameters", () => {
    it("should return a number", () => {
      const expected = "number";

      const solution = totalFuel([110671, 113234, 111563]);

      expect(typeof solution).toBe(expected);
    });
    it("7 when 28 enters as a parameter", () => {
      const expected = 7;

      const solution = totalFuel([28]);

      expect(solution).toBe(expected);
    });
  });
});

describe("Pairs function", () => {
  describe("given numeric parameters", () => {
    it("should regress the sum of the repeated numbers in a row", () => {
      const expected = 3;

      const solution = pairs("1122");

      expect(solution).toBe(expected);
    });
  });
});

describe("Sum function", () => {
  describe("given a postive or negative number ", () => {
    it("should increase or decrease the final result", () => {
      const expected = 5;

      const solution = sum("-1, +6");

      expect(solution).toBe(expected);
    });
  });
});

describe("splitStr function", () => {
  describe("given a text with positive and negative characters", () => {
    it("should separate every integer from the next one without spaces", () => {
      const expected = [-7, 15];

      const solution = splitStr(`-7 +15`);

      expect(solution).toBe(expected);
    });
  });
});
