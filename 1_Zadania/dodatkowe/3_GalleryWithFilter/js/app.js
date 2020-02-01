document.addEventListener("DOMContentLoaded",function(){

    var img = document.querySelectorAll("img"),
        showButton = document.getElementById("showButton"),
        hideButton = document.getElementById("hideButton"),
        tagInput = document.getElementById("tagInput"),
        tableWithImages = [];

    for(var i=0;i<img.length;i++){
        tableWithImages.push(img[i]);
    }
    
    showButton.addEventListener("click", clickShowButton);
    hideButton.addEventListener("click", clickHideButton);
    var valueInput;
    function clickShowButton(){
        
        if(tagInput.value.length > 0){            
            valueInput = tagInput.value;
            tagInput.value = "";
            for(var i = 0; i<img.length;i++){                
                if(img[i].dataset.tag.indexOf(valueInput) > 0 || img[i].dataset.tag.indexOf(valueInput) == 0){
                    if(img[i].dataset.tag.indexOf(valueInput) == 0 && valueInput == "bike"){
                        img[i].className ="";
                    }
                    else{
                        if(valueInput == "bike"){
                        }
                        else{
                            img[i].className ="";
                        }
                    }                    
                }
            }
        }
    }
    function clickHideButton(){
        if(tagInput.value.length > 0){   
            valueInput = tagInput.value;
            tagInput.value = "";
            for(var j = 0; j<img.length;j++){                
                if(img[j].dataset.tag.indexOf(valueInput) > 0 || img[j].dataset.tag.indexOf(valueInput) == 0){
                    if(img[j].dataset.tag.indexOf(valueInput) == 0 && valueInput == "bike"){
                        img[j].className ="invisible";
                    }
                    else{
                        if(valueInput == "bike"){
                        }
                        else{
                            img[j].className ="invisible";
                        }
                    }
                    
                }
            }
        }
    }
});