//Hamster:

//attributes:
//  owner - string, initially set as an empty string
//  name - string, set the name from parameter in constructor method
//  price - integer, set as 15

//Methods:
//  wheelRun() - log "squeak squeak"
//  eatFood() - log "nibble nibble"
//  getPrice() - return the price

class Hamster {
    constructor(name) {
        this.owner = "" // no need to set a parameter since it is an empty string(I think)
        this.name = name
        this.price = 15 //it is a static price, no need to set parameter since it won't change
    }

    wheelRun() {
        console.log("Squeak Squeak")
    }

    eatFood() {
        console.log("Nible Nible")
    }

    getPrice() {
        return this.price //not sure why this is return instead of console.log
    }

    // getOwner(ownerName){
    //     this.owner += ownerName //this method adds a word to a string
    // }

    getOwner(person) {
        // this.owner = Person.this.name
        this.owner = person.name
    }
}

//Person:

// name - set name from parameter in constructor method
// age - initially 0
// height - initially 0
// weight - initially 0
// mood - integer starting at 0 initially
// hamsters - empty array initially
// bankAccount - initially set to 0

//methods:

// getName() - returns name
// getAge() - returns age
// getWeight() - returns weight
// greet() - logs a message with person's name
// eat() - increment weight, increment mood
// exercise() - decrement weight

// ageUp() - increment age, increment height, increment weight, decrement mood, 
// increment bank account by 10 (birthday money)

// buyHamster(hamster) - 
// push the hamster object onto the hamster array, increment mood by 10, 
// decrement bankAccount by the value of the hamster (hint: use getPrice())

class Person {
    // constructor(name, age, height, weight, mood, hamsters, bankAccount) {
    //     this.name = name
    //     this.age = 0
    //     this.height = 0
    //     this.weight = 0
    //     this.mood = 0
    //     this.hamsters = []
    //     this.bankAccount = 0
    // }

    //The amount must be set in the parameter otherwise it will be undefined
    constructor(name, age = 0, height = 0, weight = 0, mood = 0, hamsters = [], bankAccount = 0) {
        this.name = name
        this.age = age
        this.height = height
        this.weight = weight
        this.mood = mood
        this.hamsters = hamsters
        this.bankAccount = bankAccount
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    getWeight() {
        return this.weight
    }

    greet(greetInput) {
        console.log(`${this.name} says ${greetInput}`)
    }

    eat() {
        //increment weight, increment mood
        this.weight++ //the ++ will add a number when called
        this.mood++ //the ++ will add a number when called
    }

    exercise() {
        //decrement weight
        this.weight-- //this will decrease a number when called
    }

    ageUp(ageUpInput) {
        //increment age, increment height, increment weight, decrement mood
        //increment bank account by 10 (birthday money)

        // this.age++
        this.age = ageUpInput //I changed it so the new age replaces the old age otherwise it will only increment by 1
        this.height++
        this.weight++
        this.mood--
        this.bankAccount += 10 //this will increment the bank account by 10, do not use *10 it will mltiply the number by1
    }

    buyHamster(hamster) {
        //push the hamster object onto the hamster array, increment mood by 10,
        //decrement bankAccount by the value of the hamster (hint: use getPrice())
        this.hamsters.push(hamster)//this will add the hamster's name to the empty array set before
        this.mood += 10
        // this.bankAccount -= this.getPrice
        this.bankAccount -= hamster.getPrice()//this will reduce the bank account by 15 beacause getPrice = 15
        if (this.bankAccount > 0) {
            console.log(`${this.name} you are broke`)
        }
    }
}

//Create a story:
// Instantiate a new Person named Timmy
// Age Timmy five years

const person1 = new Person('Timmy', 5)
// console.log(person1)

//At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.

person1.eat(5)
// console.log(person1)

//Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times

person1.exercise(5)
console.log(person1)

//Age Timmy 9 years

person1.ageUp(9)
// console.log(person1)

//Create a hamster named "Gus"
const hamster1 = new Hamster('Gus')

//Set Gus's owner to the string "Timmy"
hamster1.getOwner(person1)


//Have Timmy "buy" Gus
// person1.buyHamster(hamster1)

//Age Timmy 15 years
person1.ageUp(15)
// console.log(person1)

//Have Timmy eat twice
person1.eat(2)
console.log(person1)

//Have Timmy exercise twice
person1.exercise(2)

// person1.buyHamster(hamster1)
// person1.buyHamster(hamster1)
// console.log(person1)

//===========================================================================================================================

//=============ATEMPT1=================
//Chef Make Dinners:

//This attempt does not work

// class Dinner {
//     constructor(appetizer, entree, dessert) {
//         this.appetizer = appetizer
//         this.entree = entree
//         this.dessert = dessert
//     }


// }

// class Chef {
//     constructor(name) {
//         this.name = name
//     }

//     makeDinner(dinner) {
//         if (dinner === "I am Vegan") {
//             dinner.appetizer = "broccoli"
//             dinner.entree = "rice"
//             dinner.dessert = "water with ice"
//         }

//         else if (dinner === "I want something light") {
//             dinner.appetizer = "Chiken soup"
//             dinner.entree = "Salad"
//             dinner.dessert = "Flan"
//         }

//         else if (dinner === "I want something light") {
//             dinner.appetizer = "Chiken soup"
//             dinner.entree = "Salad"
//             dinner.dessert = "Flan"
//         }

//         else {
//             console.log('Please choose your meal')
//         }
//     }
// }


// const chef1 = new Chef("Martha")

// const dinner1 = new Dinner('I am vegan', '', '')

// chef1.makeDinner(dinner1)

// console.log(dinner1)

//=============SOLUTION=================

class Dinner {
    constructor(appetizer, entree, dessert) {
        this.appetizer = appetizer
        this.entree = entree
        this.dessert = dessert
    }
}

class Chef {
    constructor(name) {
        this.name = name
    }

    createDinner(appetizer, entree, dessert) {
        console.log('Here is your dinner:')
        return new Dinner(appetizer, entree, dessert)
        
    }
}

const chef1 = new Chef("Martha")

// const dinner1 = chef1.createDinner("Broccoli", "Rice", "Water with Ice")
// const dinner2 = chef1.createDinner("Chicken Soup", "Salad", "Flan")
const dinner3 = chef1.createDinner("Noodles", "Yellow rice", "Ice cream")

// console.log(dinner1)
// console.log(dinner2)
console.log(dinner3)