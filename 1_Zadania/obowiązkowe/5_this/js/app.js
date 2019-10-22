//ZADANIE 0 Car

var car = {
    brand: "Mercedes",
    color: "Czarny",
    numberOfKilometers: 0,
    printCarInfo:function(){
        console.log(car.color + " " + car.brand +", "+car.numberOfKilometers);
    },
    drive:function(km){
        this.numberOfKilometers += km;
    }
}

car.printCarInfo();
car.drive(20);
car.printCarInfo();

//ZADANIE 1

car.inspectionDates = ["20.10.2015","20.10.2016","20.10.2017"];
car.newInspectionDate = function(newDate) {
    this.inspectionDates.push(newDate);
}
car.showInspectionDates = function(){
    var length = this.inspectionDates.length;
    for(var i = 0; i<length; i++){
        console.log(this.inspectionDates[i]);
    }
}

car.newInspectionDate("20.10.2018");
car.newInspectionDate("20.10.2019");
car.showInspectionDates();

//ZADANIE 3

var stairs = {
    step: 0,
    up:function(){
        this.step++;
    },
    down:function(){
        this.step--;
    },
    printStep:function(){
        console.log(this.step);
    }
}
