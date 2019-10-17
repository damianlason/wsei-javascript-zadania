//ZADANIE 0a

var city = {
    capital: "Śródmieście",
    population: 2000000,
    president: "Damian Lasoń",
    primeMinisters: ["Jan Kowalski","Maciej Nowak"]
};

console.log(city.capital);
console.log(city.population);
console.log(city.president);
console.log(city.primeMinisters);

//ZADANIE 0b

var timeMachine = {
    shape: "rectangle",
    model: "DL2019",
    run:function(date,place){
        console.log("Przygotuj się! Dnia " + date + " zostaniesz przeniesiony na " + place + " !");
    }
}
console.log(timeMachine.shape);
console.log(timeMachine.model);
timeMachine.run("24.11.2024", "Malediwy");

//ZADANIE 1

var book = {
    title: "Książka bez tytułu",
    author: "Damian Lasoń",
    numberOfPages: 300
}

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

//ZADANIE 2

var person = {
    name: "Damian Lasoń",
    age: 22,
    sayHello:function(){
    console.log("Hello!");
    }
}

console.log(person.name);
console.log(person.age);
person.sayHello();

//ZADANIE 3

var recipe = {
    title: "Scrambled eggs with onion",
    servings: 2    
}

recipe.ingredients = ["eggs", "butter", "onion"];

console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);

//ZADANIE 6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

if (typeof spoon == 'object') {
    console.log("Łyżka istnieje");
}
else{
    console.log("Łyżka nie istnieje");
}