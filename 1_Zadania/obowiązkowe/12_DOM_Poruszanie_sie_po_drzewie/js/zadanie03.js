document.addEventListener("DOMContentLoaded", function(){
    var div = document.querySelectorAll("div");
    for (var i=0; i<div.length; i++) {
        div[i].addEventListener('mouseover', clickBtns);
    }
    function clickBtns() {
        this.children[0].firstElementChild.style.backgroundColor = "red";        
        this.children[0].children[1].style.backgroundColor = "green";
        this.children[0].children[2].style.backgroundColor = "green";
        this.children[0].children[3].style.backgroundColor = "green";
        this.children[0].lastElementChild.style.backgroundColor = "blue";
    }
});