/**
 *
 * @constructor
 */
function Game() {
    "use strict";
    this.rolls = [];
}

/**
 * adds the number of hit pins to rolls array
 */
Game.prototype.roll = function (hit) {
    "use strict";
    this.rolls.push(hit);
};

/**
 * calculates the score
 *
 * @return {Integer}
 */
Game.prototype.getScore = function () {
    "use strict";
    var score = 0, i = 0, frame = 0;
    for (i; this.rolls[i] !== undefined; i += 1) {
        score += this.rolls[i];
        if (this.rolls[i] === 10 && frame < 9) {
            score += this.rolls[i + 1] + this.rolls[i + 2];
            frame += 1;
        }
    }
    return score;
};