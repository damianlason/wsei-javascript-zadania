function callOtherFunction(nameOfFunction) {
    console.log("Cześć jestem funkcją o nazwie 'callOtherFunction' i wywołuję funkcję, którą ktoś mi wrzucił jako parametr");

    var randomNumber1 = Math.random() * 20;
    var randomNumber2 = Math.random() * 10;
    nameOfFunction(randomNumber1, randomNumber2);
}

callOtherFunction(function (a, b) {
    console.log("Pierwsza liczba:", a);
    console.log("Druga liczba", b)
    console.log("Wynik", a + b)
});

callOtherFunction(function (a, b){
    console.log("Szerokość prostokąta", a);
    console.log("Wysokość prostokąta", b);
    console.log("Pole powierzchni prostokąta", a*b);
});

callOtherFunction(function (a, b){
    console.log("Szerokość kwadratu", a);
    console.log("Wysokość kwadratu", b);

    if(a==b){
      console.log("Pole powierzchni kwadratu", a*b);
    }
    else{
      console.log("To nie jest kwadrat!");
    }
});