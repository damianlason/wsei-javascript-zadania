document.addEventListener("DOMContentLoaded", function(){
    var prevPicture = document.getElementById("prevPicture"),
        nextPicture = document.getElementById("nextPicture"),
        li = document.querySelectorAll("li"),
        index = 0;

        document.querySelector('ul').firstElementChild.className = "visible";
        

    nextPicture.addEventListener("click", click);
    prevPicture.addEventListener("click", clickprevPicture);
    function click(){
        if(index==5){
            li[index].className = "";
            index = 0;
            li[index].className = "visible";
        }
        else{
            li[index].className = "";
            index = index + 1;
            li[index].className = "visible";
        }
    }
    function clickprevPicture(){
        if(index==0){
            li[index].className = "";
            index = 5;
            li[index].className = "visible";
        }
        else{
            li[index].className = "";
            index = index - 1;
            li[index].className = "visible";
        }
    }
});