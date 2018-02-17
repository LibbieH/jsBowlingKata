class Frame{
    constructor(){
        this.rolls =[];
    }

    isSpare(){
        return this.rolls.length === 2 && (this.rolls[0] + this.rolls[1] === 10);
    }

    isStrike(){
        return this.rolls.length === 1 && this.rolls[0] === 10;
    }

    isComplete(){
        if(this.rolls.length === 2){
            return true;
        }
        if(this.isStrike()){
            return true;
        }
        return false;
    }
}

class BowlingGame{
    constructor(){
        this.frames = [new Frame()];
    }

    roll(pins){
        let frame = this.frames[this.frames.length - 1];
        if(frame.isComplete()){
            frame = new Frame();
            this.frames.push(frame);
        }
        frame.rolls.push(pins);
    }

    frameScore(frameIndex){
        const frame = this.frames[frameIndex];
        let frameScore = frame.rolls.reduce((agg, x) => agg + x, 0);
        
        if(frame.isSpare()){
            const nextFrame = this.frames[frameIndex + 1];
            frameScore += nextFrame.rolls[0];
        }

        if(frame.isStrike()){
            const nextFrames = this.frames.slice(frameIndex + 1);
            const nextRolls = nextFrames.reduce((arr, fr) => arr.concat(fr.rolls), []);
            const nextTwoRolls = nextRolls.slice(0,2);
            frameScore += nextTwoRolls.reduce((agg, x) => agg + x, 0);
        }

        return frameScore;
    }

    score(){
        let score = 0;
        for(let frameIndex = 0; frameIndex < 10; frameIndex++){
            let frameScore = this.frameScore(frameIndex);
            score += frameScore;
        }
        return score;
    }
}

export{BowlingGame};