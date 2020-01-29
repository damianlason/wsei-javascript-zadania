document.addEventListener("DOMContentLoaded", function(){

    var remove = document.getElementById("remove");
    remove.addEventListener('click', removeFunction);
    
    function removeFunction(){
            document.body.remove(remove);
    }    
});