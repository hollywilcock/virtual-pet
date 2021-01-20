// BASIC VALUES
const START_AGE = 0;
const START_HUNGER = 0 ;
const GROW_BOOST = 1 ;
// FITNESS VALUES
const MAX_FITNESS = 10;
const FITNESS_DECREASE = 3;
const WALK_BOOST = 4 ;
// HUNGER VALUES
const MIN_HUNGER = 0;
const HUNGRY_INCREASE = 5;
const FEED_DECREASE = 3;
const HUNGER_WARNING = 5 ;


function Pet(name) {
    this.name = name;
    this.age = START_AGE;
    this.hunger = START_HUNGER;
    this.fitness = MAX_FITNESS ;
  }

  Pet.prototype = {
    growUp() {
        this.age += GROW_BOOST ;
  },
     hungrier() {
         this.hunger += HUNGRY_INCREASE ;
  },
     lessFit() {
         this.fitness -= FITNESS_DECREASE;
     },
     walk() {

        this.fitness += WALK_BOOST;
        if (this.fitness > MAX_FITNESS) this.fitness = MAX_FITNESS;
     },
     feed() {
         this.hunger -= FEED_DECREASE ;
         if (this.hunger < MIN_HUNGER) this.hunger = MIN_HUNGER;
     }


}
 

  
module.exports = Pet ;