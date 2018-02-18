import{it, describe} from "mocha";
import{expect} from "chai";
import{BowlingGame} from "../js/bowlingKata6";

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
    
    it("score game of all rolls knocking down one pin", () => {
        let game = new BowlingGame;
        rollMany(game, 20, 1);
        expect(game.score()).to.equal(20);
    });

    it("score game with one spare", () => {
        let game = new BowlingGame;
        game.roll(5);
        game.roll(5);
        game.roll(7);
        rollMany(game, 17, 0);
        expect(game.score()).to.equal(24);
    });

    it("score game with one strike", () => {
        let game = new BowlingGame;
        game.roll(10);
        game.roll(4);
        game.roll(5);
        rollMany(game, 17, 0);
        expect(game.score()).to.equal(28);
    });

    it("score perfect game", () => {
        let game = new BowlingGame;
        rollMany(game, 12, 10);
        expect(game.score()).to.equal(300);
    });
});