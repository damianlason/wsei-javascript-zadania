document.addEventListener("DOMContentLoaded", function(){
    var btns = document.querySelectorAll("a");
    for (var i=0; i<btns.length; i++) {
        btns[i].addEventListener('click', clickBtns);
    }
    function clickBtns(event) {
        this.parentElement.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16); // losowy kolor rodzica
    }
});