export default function Critter(lName, money){
    this.name = lName;
    this.money = money;
    this.talk = function(){
        var msg = "Hi! my name is " + this.name;
        msg += " and I own  " + this.money + " coins";
        alert(msg);
    }

    this.increase = function(amount){
       this.money = this.money + amount
    }

    this.decrease = function(amount){
        this.money = this.money - amount
    }
}