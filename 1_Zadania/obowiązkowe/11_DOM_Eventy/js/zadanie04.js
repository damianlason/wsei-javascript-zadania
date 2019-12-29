
document.addEventListener("DOMContentLoaded", function(){
    var spanCounter = document.querySelector("span"),
        counter = 1,
        buttons = document.querySelectorAll("button"),
        counterUp = function(){
            spanCounter.innerHTML = counter;
            counter = counter +1;
        } 
    for (var i=0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', counterUp);
    }        
});