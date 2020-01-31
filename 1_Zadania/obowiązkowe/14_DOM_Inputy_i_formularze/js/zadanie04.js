document.addEventListener("DOMContentLoaded", function(){

    var name = document.getElementById("name"),
        type = document.getElementById("type");        
    
        name.addEventListener('change', check);
        
    function check(){

        if(name.value[0] == "4"){
            type.innerText = "Visa";  
                if(name.value.length >=13 && name.value.length <=16){
                    name.style.border = "solid 3px green";
                }
                else if(name.value.length <13 || name.value.length > 16){
                    name.style.border = "1px solid #ccc";
                }            
        }
        else if(name.value[0] == "5"){
            type.innerText = "Mastercard";
                if(name.value.length == 16){
                    name.style.border = "solid 3px green";
                }
                else if(name.value.length < 16 || name.value.length > 16){
                    name.style.border = "1px solid #ccc";
                }             
        }
        else if(name.value[0] == "3" && name.value[1] == null){
            type.innerText = "American Express";
        }
        else if(name.value[0] == "3" && name.value[1] == "4" || name.value[0] == "3" && name.value[1] == "7") {
            type.innerText = "American Express";
            if(name.value.length == 15){
                name.style.border = "solid 3px green";
            }
            else if(name.value.length < 15 || name.value.length > 15){
                name.style.border = "1px solid #ccc";
            }
        }        
        else{ 
            type.innerText = "";
            name.style.border = "1px solid #ccc"; 
        }
    }
});
