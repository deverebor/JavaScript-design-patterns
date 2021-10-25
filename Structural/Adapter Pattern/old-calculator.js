class OldCalculator {
  constructor() {
    this.operations = function(term1, term2, operation){
      switch(operation) {
        case 'add': 
          return term1 + term2
        
        case 'sub':
          return term1 - term2

        case 'mul':
          return term1 * term2

        default:
          return NaN
      }
    }
  }
}

class NewCalculator {
  constructor() {
    this.add = function(term1, term2) {
      return term1 + term2
    }

    this.sub = function(term1, term2) {
      return term1 - term2
    }

    this.mul = function(term1, term2) {
      return term1 * term2
    }
  }
}

class CalcAdapter {
  constructor() {
    const newCalc = new NewCalculator()

    this.operations = function(term1, term2, operation) {
      switch(operation) {
        case 'add': 
          return newCalc.add(term1, term2)
        
        case 'sub':
          return newCalc.sub(term1, term2)

        case 'mul':
          return newCalc.mul(term1, term2)

        default:
          return NaN
      }
    }
  }
}

const oldCalc = new OldCalculator()
console.log(oldCalc.operations(5, 5, 'add'))

const newCalc = new NewCalculator()
console.log(newCalc.add(5, 5))

const adaptedCalc = new CalcAdapter()
console.log(adaptedCalc.operations(5, 5, 'add'))