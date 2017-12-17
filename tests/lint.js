import lint from "mocha-eslint";
import { it, describe } from "mocha";

it("should have passing linting rules", function() {
    lint(["js/**/*.js"], {
        formatter: "compact",
        strict: true
    });
});