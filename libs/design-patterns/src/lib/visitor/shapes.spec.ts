import { Circle, Square, Triangle, AreaVisitor } from './shapes';

describe('shapes coding challenge', () => {
  describe('Square', () => {
    let sut: Square;

    beforeEach(() => {
      sut = new Square(5);
    });

    test('Should be defined', () => {
      expect(Square).toBeDefined();
    });

    test('Should return the correct area', () => {
      expect(sut.accept(new AreaVisitor())).toBe(25);
    });
  });

  describe('Circle', () => {
    let sut: Circle;

    beforeEach(() => {
      sut = new Circle(5);
    });

    test('Should be defined', () => {
      expect(Circle).toBeDefined();
    });

    test('Should return the correct area', () => {
      expect(sut.accept(new AreaVisitor())).toBe(78.54);
    });
  });

  describe('Triangle', () => {
    let sut: Triangle;

    beforeEach(() => {
      sut = new Triangle([3, 4, 5]);
    });

    test('Should be defined', () => {
      expect(Triangle).toBeDefined();
    });

    test('Should return the correct area', () => {
      expect(sut.accept(new AreaVisitor())).toBe(6);
    });
  });
});
