var Robot = function (name) {
    this.name = name;
    this.isFunctional = false;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

var damian = new Robot("Damian");
console.log(damian);
damian.sayHi("Kasia");
damian.changeName("Nowy Damian");
console.log(damian.name);
damian.fixIt();
damian.sayHi("Kasia");
console.log(damian);
