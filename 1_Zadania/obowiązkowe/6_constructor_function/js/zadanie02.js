function Calculator(){    
    this.history = [];
};
Calculator.prototype.add = function(num1, num2){
    this.result = num1 + num2;
    this.history.push("added " + num1 + " to " + num2 + " got " + this.result);
};
Calculator.prototype.multiply = function(num1, num2){
    this.result = num1 * num2;
    this.history.push("multiplied " + num1 + " with " + num2 + " got " + this.result);
};
Calculator.prototype.subtract = function(num1, num2){
    this.result = num2 - num1;
    this.history.push("subtracted " + num1 + " from " + num2 + " got " + this.result);    
};
Calculator.prototype.devide = function(num1, num2){
    this.result = num1 / num2;
    this.history.push("divided " + num1 + " by " + num2 + " got " + this.result); 
};
Calculator.prototype.printOperations = function(){
    console.log("Wszystkie operacje w pamięci: ");
    for(var i = 0; i<history.length; i++){
        console.log(this.history[i]);
    }
};
Calculator.prototype.clearOperations = function(){
    this.history = [];
};

var firstCalc = new Calculator();
firstCalc.add(2,3);
firstCalc.multiply(2,3);
firstCalc.subtract(2,3);
firstCalc.devide(6,3);
firstCalc.printOperations();
firstCalc.clearOperations();
console.log(firstCalc.history);

var secondCalc = new Calculator();
secondCalc.add(2,8);
secondCalc.multiply(5,5);
secondCalc.subtract(2,7);
secondCalc.devide(10,5);
secondCalc.printOperations();
secondCalc.clearOperations();
console.log(secondCalc.history);
