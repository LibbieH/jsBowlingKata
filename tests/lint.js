import lint from "mocha-eslint";

it("should have passing linting rules", function() {
    lint(["js/**/*.js"], {
        formatter: "compact",
        strict: true
    });
});