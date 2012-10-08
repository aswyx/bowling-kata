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
 * checks if a roll is a strike
 *
 * @param rollIndex {Integer}
 * @return {Boolean}
 */
Game.prototype.isStrike = function (rollIndex) {
    "use strict";
    return this.rolls[rollIndex] === 10;
};

/**
 * checks if a roll is a spare
 *
 * @param rollIndex {Integer}
 * @return {Boolean}
 */
Game.prototype.isSpare = function (rollIndex) {
    "use strict";
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
};

/**
 * calculates the score
 *
 * while trying to pass the two gutters test, i realized i need a different approach - instead of looking back
 * if it was a full frame i can check ahead. And that solved every other problem as well.
 *
 * @return {Integer}
 */
Game.prototype.getScore = function () {
    "use strict";
    var score = 0, rollIndex = 0, frameIndex = 0;
    while (this.rolls[rollIndex] !== undefined && frameIndex < 10) {
        if (this.isStrike(rollIndex)) {
            score += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
            rollIndex += 1;
        } else if (this.isSpare(rollIndex)) {
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