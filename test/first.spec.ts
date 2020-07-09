import { app } from "../src/app";
import { totalFuel } from "../src/app";
import { pairs } from "../src/app";

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
