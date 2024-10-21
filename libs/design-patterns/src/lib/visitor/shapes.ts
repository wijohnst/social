interface IShape {
  accept: (visitor: Visitor<unknown>) => void;
}

interface Visitor<T> {
  visitSquare: (shape: Square) => T;
  visitCircle: (shape: Circle) => T;
  visitTriangle: (shape: Triangle) => T;
}

export class AreaVisitor implements Visitor<Number> {
  visitCircle(circle: Circle) {
    return Math.round(Math.PI * circle.radius ** 2 * 100) / 100;
  }

  visitSquare(square: Square) {
    return square.side ** 2;
  }

  visitTriangle(triangle: Triangle) {
    const [a, b, c] = triangle.sides;
    const s = (a + b + c) / 2;
    return Math.round(Math.sqrt(s * (s - a) * (s - b) * (s - c)) * 100) / 100;
  }
}

export class Circle implements IShape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  accept(visitor: Visitor<unknown>) {
    return visitor.visitCircle(this);
  }
}

export class Square implements IShape {
  side: number;

  constructor(side: number) {
    this.side = side;
  }

  accept(visitor: Visitor<unknown>) {
    return visitor.visitSquare(this);
  }
}

export class Triangle implements IShape {
  sides: number[];

  constructor(sides: number[]) {
    this.sides = sides;
  }

  accept(visitor: Visitor<unknown>) {
    return visitor.visitTriangle(this);
  }
}
