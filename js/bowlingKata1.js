class BowlingGame {
    constructor(){
        this.rolls = [];
    }
    roll(pins){
        this.rolls.push(pins);
    }
    score(){
        return this.rolls.reduce((agg,x) => agg + x, 0);
    }
}

export{BowlingGame};