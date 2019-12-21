sayHello();

function sayHello(){ 
    console.log("Cześć");
}
sayHello();

say(); //Nie zadziała

var say = function() {
    console.log("Witaj");
}
say();