const ship = (
  lengthShip,
  xCordinate1,
  yCordinate1,
  xCordinate2,
  yCordinate2,
  xCordinate3,
  yCordinate3
) => {
  const length = lengthShip;
  const x1 = xCordinate1;
  const y1 = yCordinate1;
  const x2 = xCordinate2;
  const y2 = yCordinate2;
  const x3 = xCordinate3;
  const y3 = yCordinate3;
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
  return { length, hit, isSunk, x1, y1, x2, y2, x3, y3 };
};

const Gameboard = () => {
  const placeShip = (length, cordinates1, cordinates2, cordinates3) => {
    let shipType;
    if (length === 1) {
      shipType = ship(length, cordinates1[0], cordinates1[1]);
    } else if (length === 2) {
      shipType = ship(
        length,
        cordinates1[0],
        cordinates1[1],
        cordinates2[0],
        cordinates2[1]
      );
    } else if (length === 3) {
      shipType = ship(
        length,
        cordinates1[0],
        cordinates1[1],
        cordinates2[0],
        cordinates2[1],
        cordinates3[0],
        cordinates3[1]
      );
    }

    return { shipType };
  };

  let misses = [];
  let hits = [];
  let allHits = [];

  const ship1 = placeShip(1, [0, 1]).shipType;
  const ship2 = placeShip(2, [2, 1], [2, 2]).shipType;
  const ship3 = placeShip(3, [4, 1], [4, 2], [4, 3]).shipType;

  function receiveAttack(cordinatesAttack) {
    if (ship1.x1 === cordinatesAttack[0] && ship1.y1 === cordinatesAttack[1]) {
      hits.push(cordinatesAttack);
      allHits.push(cordinatesAttack);
      ship1.hit();
      return hits;
    } else if (
      ship2.x2 === cordinatesAttack[0] &&
      ship2.y2 === cordinatesAttack[1]
    ) {
      hits.push(cordinatesAttack);
      allHits.push(cordinatesAttack);
      ship2.hit();
      return hits;
    } else if (
      ship3.x3 === cordinatesAttack[0] &&
      ship3.y3 === cordinatesAttack[1]
    ) {
      hits.push(cordinatesAttack);
      allHits.push(cordinatesAttack);
      ship3.hit();
      return hits;
    } else {
      misses.push(cordinatesAttack);
      allHits.push(cordinatesAttack);
      return misses;
    }
  }

  function checkSunk() {
    if (
      ship1.isSunk() === true &&
      ship2.isSunk() === true &&
      ship3.isSunk() === true
    ) {
      return true;
    } else {
      return false;
    }
  }

  return { placeShip, receiveAttack, checkSunk, misses, hits, allHits };
};

function player(userBoard, aiBoard) {
  let play = true;
  let gameAI = aiBoard;
  let gameUser = userBoard;
  function AIPlay() {
    let notEqual;
    let newHits = gameAI.allHits;
    let xPlay = Math.floor(Math.random() * 6);
    let yPlay = Math.floor(Math.random() * 6);
    if (newHits.length > 0) {
      for (let i = 0; i <= newHits.length - 1; i++) {
        for (let j = 0; j <= newHits[i].length - 1; j++) {
          if (xPlay !== newHits[i][j] && yPlay !== newHits[i][j]) {
            return (notEqual = true);
          } else {
            return (notEqual = false);
          }
        }
      }
    } else {
      return [xPlay, yPlay];
    }
    if (notEqual === true) {
      return [xPlay, yPlay];
    } else {
      AIPlay();
    }
  }

  switch (play) {
    case true:
      gameUser.receiveAttack([0, 1]);
      play = !play;
      return gameUser.checkSunk();
      break;
    case false:
      gameAI.receiveAttack(AIPlay());
      play = !play;
      return gameAI.checkSunk();
      break;
  }
}

export { ship, Gameboard, player };
