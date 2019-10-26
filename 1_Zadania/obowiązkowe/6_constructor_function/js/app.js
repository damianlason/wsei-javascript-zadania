//ZADANIE 0

function Basket(){
    this.products = [];
    this.sum = 0;
}

Basket.prototype.addProduct = function(name, price){
    var product = {
        name: name,
        price: price
    }   
    this.products.push(product);
};
    
Basket.prototype.showBasket = function(){
    console.log("Paragon:");
    for (var i = 0; i<this.products.length; i++){
        console.log(this.products[i].name + ": " + this.products[i].price + "zł");
        this.sum += this.products[i].price;
    }
    console.log("Łączna kwota do zapłaty: " + this.sum +"zł");
    console.log("-----------------------------------");
};

var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();
