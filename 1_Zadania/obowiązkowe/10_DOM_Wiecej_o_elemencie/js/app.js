document.addEventListener("DOMContentLoaded", function () {

    //ZADANIE 0
    
    var ex5li = document.querySelectorAll('.ex5 li');
    for(var i=1; i<=ex5li.length; i++){
        if(i%2==1){
            ex5li[i].style.backgroundColor = "green";
        }
        else if(i%3==0){
            ex5li[i].style.fontSize = "30px";
        }
        else if(i==5){
            ex5li[i].className = "big";
        }
    }
    
    
    
    
});