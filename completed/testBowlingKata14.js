import{it, describe} from "mocha";
import{expect} from "chai";
import{BowlingGame} from "../js/bowlingKata14";

function rollMany(game, rolls, pins){
    for(let r = 0; r < rolls; r++){
        game.roll(pins);
    }
}

describe("Bowling Game", () => {
    it("score game of all gutter balls", () => {
        let game = new BowlingGame;
        rollMany(game, 20, 0);
        expect(game.score()).to.equal(0);
    });
    it("score game where all rolls knock down only one pin", () => {
        let game = new BowlingGame;
        rollMany(game, 20, 1);
        expect(game.score()).to.equal(20);
    });
    it("score game with one spare", () => {
        let game = new BowlingGame;
        game.roll(4);
        game.roll(6);
        game.roll(7);
        rollMany(game, 17, 0);
        expect(game.score()).to.equal(24);
    });
});