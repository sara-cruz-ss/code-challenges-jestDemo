import { app } from "../src/app";
import { totalFuel } from "../src/app";

test("the app initializes", () => {
  expect(app.mountpath).toBe("/");
});

describe("totalFuel", () => {
  describe("Given several numeric parameters", () => {
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
