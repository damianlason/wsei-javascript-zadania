document.addEventListener("DOMContentLoaded", function(){

    var img = document.querySelectorAll("img"),    
        selectValue = document.querySelector('select.form-control'),        
        img = document.querySelectorAll("img");
    
    img[0].style.display = "none";
    img[1].style.display = "none";
    img[2].style.display = "block";         
    
    selectValue.addEventListener('change', imgFunction);    
   
    function imgFunction(){
        if(selectValue.value == "Windows"){
            img[2].style.display = "block";
            img[0].style.display = "none";
            img[1].style.display = "none";
        }
        else{
            if(selectValue.value == "Ubuntu"){
                img[1].style.display = "block";
                img[0].style.display = "none";
                img[2].style.display = "none";
            }
            else{
                img[0].style.display = "block";
                img[1].style.display = "none";
                img[2].style.display = "none";
            }
        }        
     }
});