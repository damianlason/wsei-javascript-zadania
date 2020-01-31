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
            name.style.border = "solid 0px green";
            console.log("test2");
            typeOfCard = "other";
            name.addEventListener('change', CheckColor);
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
    }

    // switch(name.value[0]) {
    //     case "4":
    //         type.innerHTML ="Visa";
    //         if(name.value.length >= 13 && name.value.length <= 16){
    //             name.style.border = "solid 5px green";
    //         }
    //         else{
    //             name.style.border = "";
    //         }
    //       break;
    //     case "5":
    //         type.innerHTML ="Mastercard";
    //         if(name.value.length == 16){
    //             name.style.border = "solid 5px green";
    //         }
    //         else{
    //             name.style.border = "";
    //         }
    //       break;
    //     case "3":
    //             if(name.value[1] == 4 || name.value[1] == 7){
    //                 type.innerHTML ="American Express";
    //                 if(name.value.length == 15){
    //                     name.style.border = "solid 5px green";
    //                 }
    //             }
    //             else{
    //                 type.innerHTML ="";
    //                 name.style.border = "";
    //             }
    //         break;
    //     default:
    //     type.innerHTML ="";
    //     name.style.border = "";
    
});