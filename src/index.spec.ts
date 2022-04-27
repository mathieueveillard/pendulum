// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import { pendulum } from ".";
expect.extend(matchers);

it("Empty array", function () {
  expect(pendulum([])).toEqual([]);
});

it("Array of 1 element", function () {
  expect(pendulum([1])).toEqual([1]);
});

it("Array of 2 elements", function () {
  expect(pendulum([0, 1])).toEqual([0, 1]);
});

it("Array of 3 elements", function () {
  expect(pendulum([0, 1, 2])).toEqual([2, 0, 1]);
});

it("Array of 4 elements", function () {
  expect(pendulum([0, 1, 2, 3])).toEqual([2, 0, 1, 3]);
});

it("[Control]", function () {
  expect(pendulum([6, 6, 8, 5, 10])).toEqual([10, 6, 5, 6, 8]);
});

it("[Control]", function () {
  expect(pendulum([-9, -2, -10, -6])).toEqual([-6, -10, -9, -2]);
});
