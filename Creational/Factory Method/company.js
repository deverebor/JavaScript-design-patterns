function Developer(name) {
  this.name = name
  this.type = "Developer"
}

function Tester(name) {
  this.name = name
  this.type = "Tester"
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name)
      case 2:
        return new Tester(name)
    }
  }
}

function say() {
  console.log(`Hi, I am ${this.name} and i am a ${this.type}`)
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("Lucas Souza", 1))
employees.push(employeeFactory.create("Mirella Matos", 2))
employees.push(employeeFactory.create("Luiza Santos", 1))
employees.push(employeeFactory.create("Gabirel Mendes", 1))
employees.push(employeeFactory.create("Tim Duncan", 2))

employees.forEach(emp => {
  say.call(emp)
})