function Doctor(name, genre, yearsWork) {
  this.name = name
  this.yearsWork = yearsWork
  this.genre = genre
  this.job = 'Doctor'
}

function Nurse(name, genre, yearsWork) {
  this.name = name
  this.yearsWork = yearsWork
  this.genre = genre
  this.job = 'Nurse'
}

function Anesthetist(name, genre, yearsWork, ) {
  this.name = name
  this.yearsWork = yearsWork
  this.genre = genre
  this.job = 'Anesthetist'
}

function HospitalFactory() {
  this.create = (name, genre, job, yearsWork) => {
    switch (job) {
      case 1:
        if (genre == 'fem') {
          let genre = 'Feminino'
          return new Doctor(name, genre, yearsWork)

        } else if (genre == 'mas') {
          let genre = 'Masculino'
          return new Doctor(name, genre, yearsWork)
        }

      case 2:
        if (genre == 'fem') {
          let genre = 'Feminino'
          return new Nurse(name, genre, yearsWork)

        } else if (genre == 'mas') {
          let genre = 'Masculino'
          return new Nurse(name, genre, yearsWork)
        }

      case 3:
        if (genre == 'fem') {
          let genre = 'Feminino'
          return new Anesthetist(name, genre, yearsWork)

        } else if (genre == 'mas') {
          let genre = 'Masculino'
          return new Anesthetist(name, genre, yearsWork)
        }

    }
  }
}

function showEmploees() {
  console.log(`Nome do Funcionário: ${this.name}.`)
  console.log(`Gênero: ${this.genre}.`)
  console.log(`Cargo do funcionário: ${this.job}.`)
  console.log(`Anos de colaboração: ${this.yearsWork} anos.\n`)
}

const hospitalfactory = new HospitalFactory()
const emploees = []

emploees.push(hospitalfactory.create('Lucas Souza', 'mas', 1, 5))
emploees.push(hospitalfactory.create('Geisielle', 'fem', 1, 5))
emploees.push(hospitalfactory.create('Marcela', 'fem', 2, 8))
emploees.push(hospitalfactory.create('Gabriel', 'mas', 3, 8))

emploees.map(emploees => {
  showEmploees.call(emploees)
})