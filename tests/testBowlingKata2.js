import { it, describe } from "mocha";
import { expect } from "chai";
import { BowlingGame } from "../js/bowlingKata2";

function rollMany(game, n, pins){
    for(let r = 0; r < n; r++){
        game.roll(pins);
    }
}

describe("Bowling Game", () => {
    it("score game of all gutter balls", () => {
        let game = new BowlingGame;
        rollMany(game, 20, 0);
        expect(game.score()).to.equal(0);
    });

    it("score game of all rolls knocking down 1 pin", () => {
        let game = new BowlingGame;
        rollMany(game, 20, 1);
        expect(game.score()).to.equal(20);
    });

    it("score game with one spare", () => {
        let game = new BowlingGame;
        game.roll(5);
        game.roll(5);
        game.roll(3);
        rollMany(game, 17, 0);
        
        expect(game.score()).to.equal(16);
    });
});