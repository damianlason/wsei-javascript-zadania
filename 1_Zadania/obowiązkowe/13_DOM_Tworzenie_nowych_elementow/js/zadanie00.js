document.addEventListener("DOMContentLoaded", function(){
    var a = document.querySelectorAll("a");
    for (var i=0; i<a.length; i++) {
        a[i].addEventListener('click', removeElement);
    }
    function removeElement(){
        this.parentElement.parentElement.remove();
    }    
});