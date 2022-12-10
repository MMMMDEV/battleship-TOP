import { Gameboard, ship } from "./functions";

test("ship hit() return hits plus 1", () => {
  expect(ship(5).hit()).toBe(1);
});

test("ship isSunk() return false if lengh != hits", () => {
  expect(ship(5).isSunk()).toBe(false);
});

test("placeShip return x cordinate", () => {
  expect(Gameboard().placeShip(1, [0, 1]).shipType.x1).toBe(0);
});

test("placeShip return y cordinate", () => {
  expect(Gameboard().placeShip(1, [0, 1]).shipType.y1).toBe(1);
});

test("receiceAttack records hits", () => {
  expect(Gameboard().receiveAttack([0, 1])).toStrictEqual([[0, 1]]);
});

test("receiceAttack records missed hits", () => {
  expect(Gameboard().receiveAttack([0, 0])).toStrictEqual([[0, 0]]);
});

test("checkSunk reports if all ships have been sunk", () => {
  expect(Gameboard().checkSunk()).toBe(false);
});
