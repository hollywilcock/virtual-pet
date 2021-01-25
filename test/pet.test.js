const {Pet, MIN_FITNESS, MAX_HUNGER, MAX_AGE} = require("../src/pet")

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  });

  describe('constructor', () => {
    it('sets the name property', () => {
      const pet = new Pet('Fido');
  
      expect(pet.name).toEqual('Fido');
    });
  });
  describe('constructor', () => {
    
    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.age).toEqual(0);
    });
    
    it('increases the age by 1', () => {
        const pet = new Pet('Fido')
        pet.growUp();
        expect (pet.age).toEqual(1);
    });
  });

describe('Hunger' , () => {
    
      it('Has initial hunger of 0 ', () => {
        const pet = new Pet('Fido')
          
        expect (pet.hunger).toBe(0);
      });
      it ('Gets hungrier when it grows up' , () => {
        const pet = new Pet('Fido')
          pet.growUp();
          pet.hungrier();

          expect (pet.hunger).toBe(5);
      });
      it ('Gets less hungry when fed', () => {
        const pet = new Pet('Fido')
        pet.hunger = 5
        pet.feed();
        
        expect (pet.hunger).toEqual(2)
      });
      it ('Decreases hunger to a minimum of 0 ', () => {
        const pet = new Pet('Fido')
        pet.hunger = 2
        pet.feed();

        expect (pet.hunger).toEqual(0)
      });
  });

describe('Fitness' , () => {
      it('Has initial fitness of 10', () => {
        const pet = new Pet('Fido')
        expect (pet.fitness).toBe(10);
      });
      it('Gets less fit when it grows up', () => {
        const pet = new Pet('Fido')
        pet.growUp();
        pet.lessFit();
      });
      it (' A walk will increase fitness by 4 ', () => {
        const pet = new Pet('Fido')
        pet.fitness = 4 ;
        pet.walk();
        expect (pet.fitness).toEqual(8)
      });
      it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('fido');
    
        pet.fitness = 8;
        pet.walk();
    
        expect(pet.fitness).toEqual(10);
      });

  });

describe ('Check-Up ', () => {
      it('returns warning message when pets fitness reached 3 or less', () => {
        const pet = new Pet('Fido');
        pet.fitness = 3;
        pet.hunger = 4;

        expect (pet.checkUp()).toBe("I need a walk");
      });
      it('returns warning message when hunger is 5 or more', () => {
          const pet = new Pet('Fido');
          pet.hunger= 6;
          pet.fitness = 5

          expect (pet.checkUp()).toBe("I am hungry")
      });
      it('returns warning message wen hunger is 5 + AND fitness is 3 - ', () => {
          const pet = new Pet('Fido');
          pet.hunger = 7;
          pet.fitness = 2;

          expect(pet.checkUp()).toBe("I am hungry AND I need a walk")
      });
      it('returns a message when hunger is less than 5 and fitness is above 3', () => {
          const pet = new Pet('Fido');
          pet.hunger = 4;
          pet.fitness = 7;

          expect(pet.checkUp()).toBe("I feel great!")
      });
      it('If the pets fitness is 0 or less, it should return false.', () => {
        const pet = new Pet('Fido');
    
        pet.isAlive();
    
        expect(pet.isAlive()).toBe('false');
      });
    
      it('If the pets hunger is 10 or more, it should return false.', () => {
        const pet = new Pet('Fido');
    
        pet.isAlive();
    
        expect(pet.isAlive()).toBe('false');
      });
    
      it('If the pets age is 30 or more, it should return false.', () => {
        const pet = new Pet('Fido');
    
        pet.isAlive();
    
        expect(pet.isAlive).toBe('false');
      });
    
      it('Otherwise it should return true.', () => {
        const pet = new Pet('Fido');
    
        pet.isAlive();
    
        expect(pet.isAlive()).toBe('true');
      });
    
      it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
    
        pet.isAlive();
    
        expect(pet.isAlive()).toBe('Your Pet has passed away. RIP.');
      });
});

