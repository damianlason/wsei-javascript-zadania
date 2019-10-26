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
    var idHomeSecondWay = document.getElementById("home");
    
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
    
    
    
});
