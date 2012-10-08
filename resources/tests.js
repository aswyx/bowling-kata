test("testAllOnes", function () {
    "use strict";
    var game = new Game(), i = 0;
    for (i; i < 20; i += 1) {
        game.roll(1);
    }
    deepEqual(game.getScore(), 20, "All ones game passed!");
});

test("testAllStrikes", function () {
    'use strict';
    var game = new Game(), i = 0;
    for (i; i < 12; i += 1) {
        game.roll(10);
    }
    deepEqual(game.getScore(), 300, "All strikes game passed!");
});

test("testAllSpares", function () {
    'use strict';
    var game = new Game(), i = 0;
    for (i; i < 21; i += 1) {
        game.roll(5);
    }
    deepEqual(game.getScore(), 150, "All spares game passed!");
});

test("testAllGutters", function () {
    'use strict';
    var game = new Game(), i = 0;
    for (i; i < 21; i += 1) {
        game.roll(0);
    }
    deepEqual(game.getScore(), 0, "All gutters game passed!");
});

test("testTwoGutters", function () {
    'use strict';
    var game = new Game(), i = 0;
    for (i; i < 5; i += 1) {
        game.roll(10);
    }
    for (i = 0; i < 4; i += 1) {
        game.roll(0);
    }
    for (i = 0; i < 5; i += 1) {
        game.roll(10);
    }
    deepEqual(game.getScore(), 210, "Strikes with two gutter frames passed!");
});