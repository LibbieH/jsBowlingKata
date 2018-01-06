class BowlingGame {
    constructor() {
        this.rolls = [];
        this.currentRoll = 0;
    }
    
    roll(pins) {
        this.rolls[this.currentRoll++] = pins;
    }
    
    score() {
        let score = 0, frameIndex = 0;
    
        for (let frame = 0; frame < 10; frame++) {
            const frameSum = this.rolls[frameIndex] + this.rolls[frameIndex+1];
            if (this.rolls[frameIndex] === 10) { 
                score += 10 + this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
                frameIndex++;
            } else if (frameSum === 10) {
                score += frameSum + this.rolls[frameIndex + 2];
                frameIndex += 2;
            } else {
                score += frameSum;
                frameIndex += 2;
            }
        }
    
        return score;
    }
}
export{BowlingGame};