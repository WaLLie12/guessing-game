class GuessingGame {
    constructor() {
        this.minRange = 0;
        this.maxRange = 0;
        this.currentGuess = 0;
    }

    setRange(min, max) {
        this.minRange = min;
        this.maxRange = max;
    }

    guess() {
        this.currentGuess = Math.floor((this.minRange + this.maxRange) / 2);
        return this.currentGuess;
    }

    lower() {
        this.maxRange = this.currentGuess;
    }

    greater() {
        this.minRange = this.currentGuess + 1;
    }
}


module.exports = GuessingGame;
