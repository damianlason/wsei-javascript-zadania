document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    
    //ZADANIE 0
    
    var ex5ul = document.querySelectorAll('.ex5 li').length;
    for(var i=0; i<ex5ul; i++){
//        if(i%2==0){
//            document.querySelectorAll('.ex5 li')[i].style.backgroundColor = "green";
//        }
        if(i==4){
            document.querySelectorAll('.ex5 li')[4].classList.add("big");
        }
    }
    
    
    
    

});