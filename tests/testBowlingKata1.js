import { it, describe } from "mocha";
import { expect } from "chai";
import {BowlingGame} from "../js/bowlingKata1";

function rollMany(n, pins){
    for (let r=0; r<n; r++){
        this.game.roll(pins);
    }
}

describe("Bowling Game", () => {
    it("score game of all gutter balls", () => {
        let game = new BowlingGame();
        for(let r=0; r <20; r++){
            game.roll(0);
        }
        expect(game.score()).to.equal(0);
    });

    it("score game of all 1s", () => {
        let game = new BowlingGame();
        for(let r=0; r<20; r++){
            game.roll(1);
        }
        expect(game.score()).to.equal(20);
    });

    it("scores a game with one spare", () => {
        let game = new BowlingGame();
        for(let r=0; r<20; r++){
            game.roll(5);
            game.roll(5);
            game.roll(3);
            rollMany(this, 17, 0);
        }
        expect(game.score()).to.equal(13);
    });
});
