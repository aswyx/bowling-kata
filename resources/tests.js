/**
 * make rolls to the game
 *
 * @param game
 * @param quantity {Integer}
 * @param value {Integer}
 */
function makeRoll(game, quantity, value) {
    'use strict';
    var i = 0;
    for (i; i < quantity; i += 1) {
        game.roll(value);
    }
}

/**
 * Tests a game with all one rolls
 */
test("testAllOnes", function () {
    "use strict";
    var game = new Game();

    makeRoll(game, 20, 1);

    deepEqual(game.getScore(), 20, "All ones game passed!");
});

/**
 * Tests a game with all strike rolls
 */
test("testAllStrikes", function () {
    'use strict';
    var game = new Game();

    makeRoll(game, 12, 10);

    deepEqual(game.getScore(), 300, "All strikes game passed!");
});

/**
 * Tests a gem with all spare frames
 */
test("testAllSpares", function () {
    'use strict';
    var game = new Game();

    makeRoll(game, 21, 5);

    deepEqual(game.getScore(), 150, "All spares game passed!");
});

/**
 * Tests a game with all zero rolls
 */
test("testAllGutters", function () {
    'use strict';
    var game = new Game();

    makeRoll(game, 20, 0);

    deepEqual(game.getScore(), 0, "All gutters game passed!");
});

/**
 * Tests a gem with 5 strikes, 2 gutters and 5 strikes again
 */
test("testTwoGutters", function () {
    'use strict';
    var game = new Game(), i = 0;

    makeRoll(game, 5, 10);
    makeRoll(game, 4, 0);
    makeRoll(game, 5, 10);

    deepEqual(game.getScore(), 210, "Strikes with two gutter frames passed!");
});

/**
 * Tests a gem with no pattern
 */
test("testRandom", function () {
    'use strict';
    var game = new Game();
    makeRoll(game, 1, 4);
    makeRoll(game, 1, 2);

    makeRoll(game, 1, 0);
    makeRoll(game, 1, 5);

    makeRoll(game, 1, 10);

    makeRoll(game, 1, 7);
    makeRoll(game, 1, 2);

    makeRoll(game, 1, 0);
    makeRoll(game, 1, 5);

    makeRoll(game, 1, 5);
    makeRoll(game, 1, 2);

    makeRoll(game, 2, 0);

    makeRoll(game, 1, 3);
    makeRoll(game, 1, 5);

    makeRoll(game, 2, 5);

    makeRoll(game, 1, 2);
    makeRoll(game, 1, 6);


    deepEqual(game.getScore(), 79, "Game without pattern passed!");
});