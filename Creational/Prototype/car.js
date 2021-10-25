const car = {
  noOfWheels: 4,
  start() {
    return 'started'
  },
  stop() {
    return 'stoped'
  }
}

const myCar = Object.create(car, {
  owner: {
    value: 'Math'
  }
})

console.log(myCar.__proto__ === car)