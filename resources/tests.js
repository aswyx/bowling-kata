test("firstTest", function () {
    "use strict";
    var game = new Game();
    game.roll(1);
    ok(1 === game.getScore(), "Passed!");
});

test("testAllOnes", function () {
    "use strict";
    var game = new Game(), i;
    for (i = 0; i < 20; i += 1) {
        game.roll(1);
    }
    deepEqual(game.getScore(), 20, "All ones game passed!");
});

test("testAllStrikes", function () {
    'use strict';
    var game = new Game(), i;
    for (i = 0; i < 12; i += 1) {
        game.roll(10);
    }
    deepEqual(game.getScore(), 300, "All strike game passed!");
});