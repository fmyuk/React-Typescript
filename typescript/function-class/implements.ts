interface Shape {
  readonly name: string;
  getArea: () => number;
}

interface Quadrangle {
  side: number;
}

class RectangleImpl implements Shape, Quadrangle {
  readonly name = "rectangle";
  side: number;
  sideB: number;

  constructor(side: number, sideB: number) {
    this.side = side;
    this.sideB = sideB;
  }

  getArea = (): number => this.side * this.sideB;
}
