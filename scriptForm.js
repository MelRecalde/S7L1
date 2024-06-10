/*
const form = document.querySelector("form")

form.onsubmit = function (e) {
    e.preventDefault()
    form.reset()
}*/

let petNameField = document.getElementById('petName')
let ownerNameField = document.getElementById('owner')
let breedField = document.getElementById('breed')
let speciesField = document.getElementById('species')
/*
let speciesDog = document.getElementById('dog')
let speciesCat = document.getElementById('cat')
let speciesRabbit = document.getElementById('rabbit')
let speciesOthers = document.getElementById('other')
*/
let sendButton = document.getElementById('btn')
let petList = document.getElementById('petList')

let pets = []

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
    checkOwner(otherPet) {
        if (this.ownerName === otherPet.ownerName) {
            return `${this.petName} and ${otherPet.petName} have the same owner`
        } else {
            return false
        }
    }
}


const addList = function () {
    petList.innerHTML = ''
    pets.forEach((pet) => {
      const newList = document.createElement('li')
      newList.innerText =
        'PET NAME: ' + pet.petName + ', OWNER: ' + pet.ownerName
      petList.appendChild(newList)
    })
  }

  sendButton.onclick = function () {
    let newPet = new Pet(
      petNameField.value,
      ownerNameField.value,
      speciesField.value,
      breedField.value
    )
    
    pets.push(newPet)

    renderList()
    petNameField.value = '' 
    ownerNameField.value = '' 
    breedField.value = '' 
  }
  
  