document.addEventListener("DOMContentLoaded", function(){

    var value = document.querySelectorAll("span");
    var valBtn1 = 1,
        valBtn2 = 1,
        valBtn3 = 1,
        btn1 = document.getElementById("button1"),
        btn2 = document.getElementById("button2"),
        btn3 = document.getElementById("button3");

    btn1.addEventListener('click',function(){
        value[0].innerHTML = valBtn1;
        valBtn1 = valBtn1 +1;
    })    
    btn2.addEventListener('click',function(){
        value[1].innerHTML = valBtn2;
        valBtn2 = valBtn2 +1;
    })
    btn3.addEventListener('click',function(){
        value[2].innerHTML= valBtn3;
        valBtn3 = valBtn3 +1;
    })    
});