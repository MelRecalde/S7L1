// 1. CREARE UNA CLASSE USER PER LA CREAZIONE DI OGGETTI DI TIPO "UTENTE"


class User {
    constructor (firstName, lastName, age, location = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

// Aggiungi alla classe User anche un metodo che restituisca il confronto con l'età di un'altra persona.

}

let januaryWinters = new User("January", "Winters", 50, "North");
let septemberFalls = new User("September", "Falls", 40, "West");
let maySprings = new User("May", "Springs", 30, "South");
let juneSummers = new User("June", "Summers", 20, "East");

console.log(januaryWinter)