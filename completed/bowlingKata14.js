class BowlingGame{
    constructor(){
        this.frames = [];
        this._createEmptyFrame();
    }
    _createEmptyFrame(){
        const frame = [];
        this.frames.push(frame);
        return frame;
    }

    roll(pins){
        let frame = this.frames[this.frames.length - 1];
        if(frame.length === 2){
            frame = this._createEmptyFrame();
        }
        frame.push(pins);
    }
    score(){
        let score = 0;
        for(let frameIndex = 0; frameIndex < 10; frameIndex++){
            const frame = this.frames[frameIndex];
            const frameSum = frame.reduce((agg, x) => agg + x, 0);
            score += frameSum;

            if(frameSum === 10){
                const nextFrame = this.frames[frameIndex + 1];
                score += nextFrame[0];
            }
        }
        return score;
    }
}
export{BowlingGame};