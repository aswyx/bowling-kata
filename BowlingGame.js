/**
 *
 * @constructor
 */
function Game() {
    "use strict";
    this.score = 0;
}

/**
 * rolls a ball
 */
Game.prototype.roll = function (hit) {
    "use strict";
    this.score += hit;
};

/**
 * calculates the score
 *
 * @return {Integer}
 */
Game.prototype.getScore = function () {
    "use strict";
    return this.score;
};