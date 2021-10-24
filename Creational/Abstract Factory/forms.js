class RoundedRectangle {
  constructor() {

  }

  draw() {
    console.log('Inside RoundedRectangle::drwa() method.');
  }
}

class RoundedSquare {
  constructor() {

  }

  draw() {
    console.log('Inside RoundedSquare::drwa() method.');
  }
}

class Rectangle {
  constructor() {

  }

  draw() {
    console.log('Inside Rectangle::drwa() method.');
  }
}

class Square {
  constructor() {

  }

  draw() {
    console.log('Inside Square::drwa() method.');
  }
}

class AbstractFactory {
  constructor() {

  }

  getShape(shapeType) {

  }
}

class ShapeFactory extends AbstractFactory {
  constructor() {
    super();
  }

  getShape(shapeType) {
    if (shapeType == 'RECTANGLE') {
      return new Rectangle();
    } else if (shapeType == 'SQUARE') {
      return new Square();
    }

    return null;
  }
}

class RoundedShapeFactory extends AbstractFactory {
  constructor() {
    super();
  }

  getShape(shapeType) {
    if (shapeType == 'RECTANGLE') {
      return new RoundedRectangle();
    } else if (shapeType == 'SQUARE') {
      return new RoundedSquare();
    }

    return null;
  }
}

class FactoryProducer {
  constructor() {

  }

  getFactory(rounded) {
    if (rounded) {
      return new RoundedShapeFactory();
    } else {
      return new ShapeFactory();
    }
  }
}

const shapeFactory = new FactoryProducer().getFactory(false);
const shapeRectangle = shapeFactory.getShape('RECTANGLE');
shapeRectangle.draw();
const shapeSquare = shapeFactory.getShape('SQUARE');
shapeSquare.draw();

const roundedShapeFactory = new FactoryProducer().getFactory(true);
const roundedRectangle = roundedShapeFactory.getShape('RECTANGLE');
roundedRectangle.draw();
const roundedSquare = roundedShapeFactory.getShape('SQUARE');
roundedSquare.draw();