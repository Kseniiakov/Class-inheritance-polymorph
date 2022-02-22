"use strict";

class Animal {
    constructor(herbivore, sleepingNow) {
        this.herbivore = herbivore;
        this.sleepingNow = sleepingNow;
    }

    doSleep(hour) {
        console.log(`sleep ${hour} hours`);
    };

    doEat(food) {
        console.log(`eats ${food}`);
    };
}

const animal = new Animal(true, false);
// console.log(animal);
// animal.doSleep(5);
// animal.doEat('meat');

class Cat extends Animal {
    constructor(herbivore, sleepingNow, fur, colorFur, tailLength, numberOfPaws, canSwim) {
        super(herbivore,sleepingNow);
        this.fur = fur;
        this.colorFur = colorFur;
        this.tailLength = `${tailLength} cm`;
        this.numberOfPaws = numberOfPaws;
        this.canSwim = canSwim;
    };

    doTalk() {
        console.log(`Meow`);
    };

    doSwim() {
        if(this.canSwim === false) {
            console.log(`I can not swim!`);
        }
        else {
            console.log(`...floats`);
        }
    }

    doClimb(where) {
        console.log(`climb to ${where}`);
    }

}

const cat = new Cat(false, false, true, 'Black', 30, 4, true);
// console.log(cat);
// cat.doEat('fish');
// cat.doTalk();
// cat.doSwim();
// cat.doClimb('tree');

class DomesticCat extends Cat {
    constructor(herbivore, sleepingNow, fur, colorFur, tailLength, numberOfPaws, canSwim, nickname, ...ration) {
        super(herbivore, sleepingNow, fur, colorFur, tailLength, numberOfPaws, canSwim);
        this.ration = ration;
        this.nickname = nickname;
    };

    doTalk() {
        console.log(`Mrrrr`);
    };
};

const domesticCat = new DomesticCat(false, false, true, 'Red', 20, 4, true, 'Kitty', 'fish', 'milk', 'meat');
// console.log(domesticCat);
// domesticCat.doTalk();

class WildCat extends Cat {
    constructor(herbivore, sleepingNow, colorFur, tailLength, numberOfPaws) {
        super(herbivore, sleepingNow, true, colorFur, tailLength, numberOfPaws, true);
    }

    doTalk() {
        console.log(`Mrow!`);
    };
};

const wildCat = new WildCat(false, false, 'White', 35, 4);
// console.log(wildCat);

class CircusCat extends DomesticCat {
    constructor(herbivore, sleepingNow, fur, colorFur, tailLength, numberOfPaws, canSwim, nickname, trainerName, ...ration) {
        super(herbivore, sleepingNow, fur, colorFur, tailLength, numberOfPaws, canSwim, nickname, ...ration);
        this.trainerName = trainerName;
    }

    doSomersault() {
        console.log(`${this.nickname} doing somersaults`);
    }
}

const circusCat = new CircusCat(false, false, true, 'Chocolate', 20, 4, true, 'Purry', 'John', 'canned cat food', 'fish', 'milk');
console.log(circusCat);
circusCat.doSomersault();