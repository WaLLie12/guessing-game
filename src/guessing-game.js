class GuessingGame {
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.bank = this.max - this.min;
        this.bank = Math.floor(this.bank / 2)
        this.bank = this.max - this.bank;
        this.middle = this.bank;
        return this.middle;
    }

    lower() {
        this.max = this.middle;
    }

    greater() {
        this.min = this.middle;
    }
}

module.exports = GuessingGame;
