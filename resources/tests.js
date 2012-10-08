test("firstTest", function () {
    "use strict";
    var game = new Game();
    game.roll(1);
    ok(1 === game.getScore(), "Passed!");
});