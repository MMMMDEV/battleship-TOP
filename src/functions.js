const ship = (lengthShip) => {
  const length = lengthShip;
  let hits = 0;
  let sunk = false;
  const hit = () => {
    hits += 1;
    return hits;
  };
  const isSunk = () => {
    if (length === hits) {
      sunk = true;
      return sunk;
    } else {
      return sunk;
    }
  };
  return { length, hit, isSunk };
};

const Gameboard = () => {
  const smallShip = ship(1);
  const mediumShip = ship(2);
  const bigShip = ship(3);
};

export { ship, Gameboard };
