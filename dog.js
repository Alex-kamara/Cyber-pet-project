const { Animal } = require("./animal");

class Dog extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
    }
    
    play() {
        this.happiness += 50;
        this.cleanliness -= 30;
        this.stamina -= 50;
        this.hunger += 15;
        console.log(`${this.name} played fetch with you and had a great time! 
        They now have ${this.happiness} happiness, 
        but they're tired and in need of a clean with ${this.cleanliness} cleanliness
        and a sleep with ${this.stamina} stamina!`)
        return this;
    }

    sleep() {
        this.health += 50;
        this.cleanliness -= 50;
        this.stamina += 50;
        this.hunger += 15;
        console.log(`${this.name} dreams of chasing rabbits, they now have ${this.health} but this much ${this.cleanliness}`);
        return this;
    }
}

module.exports = { Dog };

