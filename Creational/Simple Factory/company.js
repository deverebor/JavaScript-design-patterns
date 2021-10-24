class Company {
  constructor(name, area, isStartUp, emploees) {
    this.name = name
    this.area = area
    this.isStartUp = isStartUp
    this.emploees = emploees
  }

  getName() {
    return this.name
  }

  getArea() {
    return this.area
  }

  getIsStartUP() {
    if(this.isStartUp === true){
      return 'sim'
    } 
      return 'não'
  }

  getEmploees() {
    return this.emploees
  }
}

const CompanyFactory = {
  makeCompany: (name, area, isStartUp, emploees) => new Company(name, area, isStartUp, emploees)
}

const company = CompanyFactory.makeCompany('Generic Company', 'Tech', false, 250)
console.log(`A sua empresa é: ${company.getName()} da área ${company.getArea()} 
            \nVocê ${company.getIsStartUP()} é uma StartUp com ${company.getEmploees()} funcionários.`)