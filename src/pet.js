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
    this.children = [] ;
  };

  
  Pet.prototype = {
    get isAlive() {
        return this.age < MAX_AGE && this.hunger < MAX_HUNGER && this.fitness > MIN_FITNESS;
    },
    
    growUp() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
          }
        this.age += GROW_BOOST ;
  },
     hungrier() {
        
         this.hunger += HUNGRY_INCREASE ;
  },
     lessFit() {
        if (!this.isAlive) {
            throw Error('Your Pet is no longer alive :(');
          } 
         this.fitness -= FITNESS_DECREASE;
    },
  
     walk() {
        if (!this.isAlive) {
            throw new Error('Your Pet is no longer alive :(');
          }
        this.fitness += WALK_BOOST;
        if (this.fitness > MAX_FITNESS) this.fitness = MAX_FITNESS;
     },
     feed() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
          }
         this.hunger -= FEED_DECREASE ;
         if (this.hunger < MIN_HUNGER) this.hunger = MIN_HUNGER;
     },
     checkUp() {
       const WALK_WARNING = (this.fitness <= 3);
       const FEED_WARNING = (this.hunger >= 5);
       if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
       else {
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
         }
        }
    
    };

    Pet.prototype.adoptChild = function(child) {
        this.children.push(child);
    }
    

 

  
module.exports = {Pet, MIN_FITNESS, MAX_HUNGER, MAX_AGE} ;