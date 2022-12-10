import { ship } from "./functions";

test("ship hit() return hits plus 1", () => {
  expect(ship(5).hit()).toBe(1);
});

test("ship isSunk() return false if lengh != hits", () => {
  expect(ship(5).isSunk()).toBe(false);
});

test("", () => {
  expect().toBe();
});
