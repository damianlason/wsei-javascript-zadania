document.addEventListener("DOMContentLoaded", function(){

    var name = document.getElementById("name"),
        type = document.getElementById("type");        
    
        name.addEventListener('change', CheckType);
        
    function CheckType(){
        typeOfCard = "";
        if(name.value[0] == "4"){
            type.innerText = "Visa";
            typeOfCard = "Visa";
            name.addEventListener('change', CheckColor);
        }
        else if(name.value[0] == "5"){
            type.innerText = "Mastercard";
            typeOfCard = "MasterCard";
            name.addEventListener('change', CheckColor);
        }
        else if(name.value[0] == "3" && name.value[1] == null){
            type.innerText = "American Express";
            typeOfCard = "AmericanExpress";
            name.addEventListener('change', CheckColor);
        }
        else if(name.value[0] == "3" && name.value[1] == "4" || name.value[0] == "3" && name.value[1] == "7") {
            type.innerText = "American Express";
            typeOfCard = "AmericanExpress";
            name.addEventListener('change', CheckColor);                      
        }        
        else{
            console.log("test");
            type.innerText = "";
            name.style.border = "none";
            console.log("test2");
            typeOfCard = "other";
            // name.addEventListener('change', CheckColor);
        }
    }

    function CheckColor(){
        if(typeOfCard = "Visa"){
            if(name.value.length >=13 && name.value.length <=16){
                name.style.border = "solid 3px green";
            }
            else{
                name.style.border = "";
            }
        }
        else if(typeOfCard = "MasterCard"){
            if(name.value.length == 16){
                name.style.border = "solid 3px green";
            }
            else{
                name.style.border = "";
            } 
        }
        else if(typeOfCard = "AmericanExpress"){
            if(name.value.length == 15){
                name.style.border = "solid 3px green";
            }
            else{
                name.style.border = "";
            } 
        }
        else{
            name.style.border = "none";
        }        
    }
    
});
