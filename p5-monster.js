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