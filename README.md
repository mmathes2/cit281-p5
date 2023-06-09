# cit281-p5
![image](https://github.com/mmathes2/cit281-p5/assets/134009490/15d29745-cdef-4ff7-8253-821b84ddf98b)

In a world, where two monsters: King Kong and Godzilla, fight life forces to the death. Only one will survive first and then die, because everything at some point has to die, due to biology or something... NONETHELESS this code will look at which monster dies first after however much time for extra credit. 
## p5.js 
code given to us: 
``` 
/*
    CIT 281 Project 5:

    Name: Your Name
*/

// IMPORTANT: Note no object deconstruction when importing a class
// from a class module
const MonsterGame = require("./p5-monster-game.js");

// Game monsters setup information
const monsterList = [
  {
    monsterName: "King Kong",
    minimumLife: 10,
    currentLife: 150,
  },
  {
    monsterName: "Godzilla",
    minimumLife: 10,
    currentLife: 200,
  },
];
// Game configuration information
const minimumLifeDrain = 10;
const maximumLifeDrain = 50;
const gameDelayInMilliseconds = 5000; // 5 second game delay

// Create Monster Game instance
const monsterGame = new MonsterGame(
  {
    monsterList, gameDelayInMilliseconds, minimumLifeDrain, maximumLifeDrain
  }
);

// List monsters
monsterGame.listMonsters();

// Start game
monsterGame.playGame();
```
## p5-monster-game.js 
``` 
// Required code modules
const Monster = require("./p5-monster.js");


/*** Game Class ***/
/* Constructor expects an object */
// IMPORTANT: When declaring a class within a module,
// the class is the ONLY export!
module.exports = class MonsterGame {
  constructor({
    monsterList = [],
    gameDelayInMilliseconds = 5000,
    minimumLifeDrain = 1,
    maximumLifeDrain = 30,
  }) {
    console.log("Initializing monsters...");
    this.gameDelayInMilliseconds = gameDelayInMilliseconds;
    this.minimumLifeDrain = minimumLifeDrain;
    this.maximumLifeDrain = maximumLifeDrain;
    this.createMonsters(monsterList);
    console.log("Monsters initialized, ready to play!");
  }

  // List monsters
  listMonsters = () =>
      this.monsters.forEach((monster) => 
    console.log( 
      monster.forEach(
      `monster: ${monsterName},` + 
      `minimumLife: ${minimumLife},` + 
      `currentLife: ${currentLife},`+ 
      `status:${monster.isAlive ? 'Alive': 'Dead'}`)
      ))}

  // Create monsters from monster information
  createMonsters = (monsterList = []) => {
    this.monsters = monsterList.map((monster) => new Monster(monster));
  };

  // Update monster life value
  /*
  updateLife = (lifeChange = 0) =>
    this.monsters.forEach((monster) => monster.updateLife(lifeChange));
  */

  // Main game playing method, will exit when all monsters have died
  async playGame(GameDelay) {
    console.log("Starting game...");
    let monstersAreAlive = true;
    do {
      // Sleep game
      console.log(
        `Sleeping for ${this.gameDelayInMilliseconds} milliseconds...`
      );
      await sleep(this.gameDelayInMilliseconds);

      // Call each monster's random life drain method
      this.monsters.forEach((monster) => {
          if (monster.isAlive) {
            monster.randomLifeDrain(this.minimumLifeDrain, this.maximumLifeDrain)
          }
        }
      );

      // List monsters
      this.listMonsters();

      // Check if any monsters are alive and set Boolean
      monstersAreAlive =
        this.monsters.filter((monster) => monster.isAlive).length > 0;

      // See if any monsters are still alive
      if (!monstersAreAlive) {
        console.log('All monsters have died, game over!');
      }
    } while (monstersAreAlive);
  }
};

// Game loop

/*** Utility Functions ***/
// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
```
## p5-monster.js 
``` 
module.exports = class Monster{ 
    constructor ({monsterName = "unknown", minimumLife = 0, currentLife = 100, }){ 
        this.monsterName = monsterName, 
        this.minimumLife = minimumLife, 
        this.currentLife = currentLife 
        this.isAlive = currentLife >= minimumLife; //() => {currentLife >= minimumLife ?  isAlive == true : isAlive == false}
    }
}
updateLife = (lifeChangeAmount) => { 
    this.currentLife += lifeChangeAmount; 
    this.currentLife = this.currentLife < 0 ? 0 : this.currentLife; 
    this.isAlive = this.currentLife < this.minimumLife;
}
randomLifeDrain = (minimumLifeDrain, maximumLifeDrain) => { 
    let result = getRandomInteger(minimumLifeDrain,(maximumLifeDrain +1)) 
    console.log(`life drain: ${result}`)
}
```
## Results:
![image](https://github.com/mmathes2/cit281-p5/assets/134009490/be0f6c42-d2d9-4398-b076-abb4b1c0c96d)



