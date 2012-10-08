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
    console.log(this.rolls);
    var score = 0, i = 0, frame = 0;
    while (this.rolls[i] !== undefined && frame < 10) {
        if (this.rolls[i] === 10) {
            score += this.rolls[i] + this.rolls[i + 1] + this.rolls[i + 2];
            i += 1;
        } else if (this.rolls[i] + this.rolls[i + 1] === 10) {
            score += this.rolls[i] + this.rolls[i + 1] + this.rolls[i + 2];
            i += 2;
        } else {
            score += this.rolls[i] + this.rolls[i + 1];
            i += 2;
        }
        //console.log(score);
        frame += 1;
    }
    return score;
};