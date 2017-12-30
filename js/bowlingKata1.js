class BowlingGame {
    constructor(){
        this.rolls = [];
        this.currentRoll = 0;
    }
    roll(pins){
        this.rolls[this.currentRoll++] = pins;
    }
    score(){
        let score = 0, frameIndex = 0;
        for(let f=0; f<10; f++){
            if(this.rolls[frameIndex] + this.rolls[frameIndex+1] == 10){
                score += 10 + this.rolls[frameIndex + 2];
                frameIndex += 2;
            } else {
                score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
                frameIndex += 2;
            }
        }
        return score;
    }
}

export{BowlingGame};