export default class Rover {
  orientationName = ["N", "E", "S", "W"];
  // Object position, when constructor is called, the initial position
  position = { y: 0, x: 0 };
  // Size of Square
  square = { y: 0, x: 0 };
  // Object orientation, in object instantation, the initial orientation
  orientationNumber = 0;
  finished = false;
  movements = null;
  crashed = false;

  constructor(orientation, positionX, positionY, squareX, squareY) {
    this.position.x = positionX;
    this.position.y = positionY;
    this.square.x = squareX;
    this.square.y = squareY;
    this.pointerOrientation = orientation;
  }
  set currentOrientation(pointerOrientation) {
    switch (pointerOrientation.toLowerCase()) {
      case "n":
        this.orientationNumber = 0;
        break;
      case "e":
        this.orientationNumber = 1;
        break;
      case "s":
        this.orientationNumber = 2;
        break;
      case "w":
        this.orientationNumber = 3;
    }
  }
  moveOn(orientationNumber) {
    switch (orientationNumber) {
      case 0:
        this.position.y++;
        break;
      case 1:
        this.position.x++;
        break;
      case 2:
        this.position.y--;
        break;
      case 3:
        this.position.x--;
    }
  }
  rotate(direction) {
    if (direction.toLowerCase() === "l") {
      this.orientationNumber--;
      if (this.orientationNumber === -1) {
        this.orientationNumber = 3;
      }
    }
    if (direction.toLowerCase() === "r") {
      this.orientationNumber++;
      if (this.orientationNumber === 4) {
        this.orientationNumber = 0;
      }
    }
  }
}
