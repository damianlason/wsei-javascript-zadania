document.addEventListener("DOMContentLoaded", function () {
    
    //ZADANIE 0
    
    var title = document.querySelector(".title");

    function getDataAnimation(element){
        var value = element.dataset.animation;
        return value;
    }
    getDataAnimation(title);   
    
    //ZADANIE 1
    
    //1
    var idHomeFirstWay = document.querySelector("#home");
    console.log(idHomeFirstWay);
    var idHomeSecondWay = document.getElementById("home");
    console.log(idHomeSecondWay);
    
    //2
    var list = document.getElementsByTagName("li");
    var firstLiElementWithData;
    
    for(var i = 0; i<list.length; i++){
        if(list[i].dataset.direction){
            firstLiElementWithData = list[i];
            break;
        }
    }
        
    //3
    var firstBlockClass = document.getElementsByClassName("block")[0];
    
    //ZADANIE 2
    
    const nav = document.querySelector('nav li');
    console.log(nav);

    const divs = document.querySelectorAll('div p');
    console.log(divs);

    const divsInArticle = document.querySelectorAll('article div');
    console.log(divsInArticle);

    //ZADANIE 3

    const articleTag = document.querySelector('article.first');

    const everyH1 = articleTag.querySelectorAll('h1').length;
    console.log(everyH1);

    
    //2

    const divs = document.querySelectorAll('div p');
    console.log(divs);
    
    //3

    const divsInArticle = document.querySelectorAll('article div');
    console.log(divsInArticle);

    //ZADANIE 3
    
    //1

    const articleTag = document.querySelector('article.first');
    
    //2

    const everyH1 = articleTag.querySelectorAll('h1').length;
    console.log(everyH1); 
});
