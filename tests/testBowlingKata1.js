import { it, describe } from "mocha";
import { expect } from "chai";
import { add } from "./code";

describe("Bowling Game", () => {
    it("score game of all gutter balls", () => {
        let game = new BowlingGame();
        for(var r=0; r <20; r++){
            game.roll(0);
        }
        expect(game.score()).to.equal(0);
    });
});