function NbaPG(playerName) {
  this.playerName = playerName
  this.playerPosition = 'Point Guard'
}

function NbaSG(playerName) {
  this.playerName = playerName
  this.playerPosition = 'Shooting Guard'
}

function NbaSF(playerName) {
  this.playerName = playerName
  this.playerPosition = 'Shooting Forward'
}

function NbaPF(playerName) {
  this.playerName = playerName
  this.playerPosition = 'Power Forward'
}

function NbaC(playerName){
  this.playerName = playerName
  this.playerPosition = 'Center'
}

function NbaFactory() {
  this.create = (playerName, playerPosition) => {
    switch(playerPosition){
      case 1:
        return new NbaPG(playerName)

      case 2:
        return new NbaSG(playerName)

      case 3:
        return new NbaSF(playerName)

      case 4:
        return new NbaPF(playerName)

      case 5:
        return new NbaC(playerName)
    }
  }
}

function NbaPlayers(){
  return console.log(`O nome do jogador é ${this.playerName} e sua posição em quadra é ${this.playerPosition}.`)
}

const nbafactory = new NbaFactory()
const nba = []

nba.push(nbafactory.create("Ray Alen", 1))
nba.push(nbafactory.create("Furkan Korkmaz", 2))
nba.push(nbafactory.create("Anthony Edwards", 3))
nba.push(nbafactory.create("Tobias Harrys", 4))
nba.push(nbafactory.create("Joel Embiid", 5))

nba.map(nba => {
  NbaPlayers.call(nba)
})