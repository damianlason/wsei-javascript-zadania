document.addEventListener("DOMContentLoaded", function(){

    var box = document.getElementById("box"),
        spans = document.querySelectorAll("span");
    
    box.addEventListener('mousemove', showCoordinates);

    function showCoordinates(e) {
        spans[0].innerText = e.screenX;
        spans[1].innerText = e.screenY;
        spans[2].innerText = e.clientX;
        spans[3].innerText = e.clientY;    
    }
});