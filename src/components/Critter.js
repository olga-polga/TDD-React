export default function Critter(name, money) {
    this.name = name;
    this.money = money;
    this.talk = function () {
        var msg = "I am " + this.name;
        msg += " and I own " + this.money + " coins";
        return msg;
    }

    this.increase = function (amount) {
        this.money += amount;
    }

    this.decrease = function (amount) {
        this.money -= amount;
    }
}