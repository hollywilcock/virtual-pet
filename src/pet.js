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
//DEATH VALUES
const MAX_AGE = 30;
const MIN_FITNESS = 0;
const MAX_HUNGER = 10;



function Pet(name) {
    this.name = name;
    this.age = START_AGE;
    this.hunger = MIN_HUNGER;
    this.fitness = MAX_FITNESS ;
    this.isAlive = true;
    this.Baby = [];
  };

  Pet.prototype = {

    isAlive() {
        if ((this.fitness > MAX_FITNESS && this.hunger < MAX_HUNGER && this.age < MAX_AGE)){
            return ('false')
        } else if (!this.isAlive)
        throw new Error ('Your Pet has passed away. RIP.')
    },

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
     },

     
     checkUp() {
       const WALK_WARNING = (this.fitness <= 3);
       const FEED_WARNING = (this.hunger >= 5);

        if (!FEED_WARNING && WALK_WARNING) {
            return "I need a walk";
        };
        if (FEED_WARNING && !WALK_WARNING) {
            return "I am hungry";
        };
        if (FEED_WARNING && WALK_WARNING){
            return "I am hungry AND I need a walk";
        };
        return "I feel great!";

    },
   
    };
 

  
module.exports = {Pet, MIN_FITNESS, MAX_HUNGER, MAX_AGE} ;