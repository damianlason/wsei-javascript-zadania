document.addEventListener("DOMContentLoaded", function(){
    var btns = document.querySelectorAll("a");
    
    for (var i=0; i<btns.length; i++) {
        btns[i].addEventListener('click', buttonClick);
    }
    function buttonClick(event) {
        var elementToShow = this.nextElementSibling;
        
        if(elementToShow !== null){
            if(elementToShow.style.visibility == "hidden"){
               elementToShow.style.visibility = "visible";
            }
            else{
               elementToShow.style.visibility = "hidden";            
            }
        }
    }
});
