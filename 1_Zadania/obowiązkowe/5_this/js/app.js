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