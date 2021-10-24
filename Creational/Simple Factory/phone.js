class Phone {
  constructor(name, processor, gpu){
    this.name = name
    this.processor = processor
    this.gpu = gpu
  }

  getName() {
    return this.name
  }

  getProcessor() {
    return this.processor
  }

  getGpu() {
    return this.gpu
  }
}

const PhoneFactory = {
  makePhone: (name, processor, gpu) => new Phone(name, processor, gpu)
}

const smarthphone = PhoneFactory.makePhone('Samsung A35', 'Helios G80', 'Mali-G71 MP2')
console.log(`Seu telefone é: ${smarthphone.getName()}`)
console.log(`O processador desse modelo é: ${smarthphone.getProcessor()}`)
console.log(`A GPU desse modelo é: ${smarthphone.getGpu()}`)