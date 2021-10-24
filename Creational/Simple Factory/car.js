class CarShop {
  constructor(model, launchAge) {
    this.model = model
    this.launchAge = launchAge
  }

  getModel() {
    return this.model
  }

  getLauchAge(){
    return this.launchAge
  }

}

const CarFactory = {
  makeCar: (model, lauchAge) => new CarShop(model, lauchAge)
}

const car = CarFactory.makeCar('Caravan', '1988')
console.log('Your car is: ', car.getModel())
console.log('Lauch age: ', car.getLauchAge())