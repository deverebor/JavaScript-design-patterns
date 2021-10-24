class Bike {
  constructor(builder) {
    this.size = builder.size
    this.newPaint = builder.newPaint || false
    this.tireType = builder.tireType || false
    this.horn = builder.horn || false
    this.clientType = builder.clientType || false
  }
}

class BikeBuilder {
  constructor(size) {
    this.size = size
  }

  addNewPaint() {
    this.newPaint = true
    return this
  }

  addTireType() {
    this.tireType = true
    return this
  }

  addHorn() {
    this.horn = true
    return this
  }

  getClientType() {
    this.clientType = true
    return this
  }

  build() {
    return new Bike(this)
  }
}

const bikeCostumer = new Bike({
  size: 'xl',
  newPaint: 'red',
  tireType: '14',
  horn: true,
  clientType: 'Casual'
})

console.log(bikeCostumer)