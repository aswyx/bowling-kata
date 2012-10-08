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
    console.log(hit);
    this.rolls.push(hit);
};

/**
 * calculates the score
 *
 * @return {Integer}
 */
Game.prototype.getScore = function () {
    "use strict";
    var score = 0, rollIndex = 0, frameIndex = 0;
    while (this.rolls[rollIndex] !== undefined && frameIndex < 10) {
        if (this.rolls[rollIndex] === 10) {
            score += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
            rollIndex += 1;
        } else if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10) {
            score += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
            rollIndex += 2;
        } else {
            score += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
            rollIndex += 2;
        }
        frameIndex += 1;
    }
    return score;
};