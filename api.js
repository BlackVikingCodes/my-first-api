/* class Bottle{
  constructor(name,type,age){
    this._name = name,
    this._type = type,
    this._age = age
  }

  get name(){
    return this._name
  }

  get age(){
    return this._age
  }

  get type(){
    return this._type
  }

  pop(){
    console.log(`Poppin\' that ${this._name} bottle`)
  }
}

let diplomatico = new Bottle('Diplomático','Rum',4)
let granReserva = new Bottle('Gran Reserva', 'Rum', 2)
let chivasRegal = new Bottle('Chivas Regal','Whisky', 18)
let somethingSpecial = new Bottle('Somethig Special', 'Whisky', 12) */




const bottles = {
  "diplomatico":{
    "name": "Diplomatico",
    "type": "Rum",
    "age": 4  
  },
  "gran reserva": {
    "name": "Gran Reserva",
    "type": "Rum",
    "age": 2
  },
  "chivas regal": {
    "name": "Chivas Regal",
    "type": "Whisky",
    "age": 18
  },
  "something special": {
    "name": "Something Special",
    "type": "Whisky",
    "age": 12
  },
  "unknown": {
    "name": "Don't know that one, bro",
    "type": "Told you I don't know, my guy",
    "age": "Bruh wtf?"
  }
  
}

module.exports = bottles