document.addEventListener("DOMContentLoaded", function(){
    var randomColor = "";
    this.addEventListener('click',function(event){
        if(event.target.className == "box"){
            changeColor(event.target.style);
        }
    } );
    function changeColor(style){
        randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        style.backgroundColor = randomColor;
    }
});