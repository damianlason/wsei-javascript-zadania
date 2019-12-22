document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    
    //ZADANIE 0
    
    var ex5li = document.querySelectorAll('.ex5 li');
    for(var i=0; i<ex5li.length; i++){
        if(i%2==0){
            ex5li[i].style.backgroundColor = "green";
        }
        if(i==4){
            ex5li[i].classList.add("big");
        }
        if(i%3==0){
            ex5li[i].style.textDecoration = "underline";
        }
    }
    
    //ZADANIE 1

    var chromeLogo = document.querySelector(".chrome");
    var edgeLogo = document.querySelector(".edge");
    var firefoxLogo = document.querySelector(".firefox");

    chromeLogo.style.backgroundImage = "url('assets/img/chrome.png')";
    chromeLogo.style.width = "100px";

    edgeLogo.style.backgroundImage = "url('assets/img/edge.png')";
    firefoxLogo.style.backgroundImage = "url('assets/img/firefox.png')";

    var chromeLink = document.querySelector(".chrome + a");
    var edgeLink = document.querySelector(".edge + a");
    var firefoxLink = document.querySelector(".firefox + a");

    chromeLink.innerHTML = "Chrome";
    firefoxLink.innerHTML = "Firefox";

    chromeLink.setAttribute("href", "https://www.google.com/intl/pl_pl/chrome/");
    edgeLink.setAttribute("href", "https://www.microsoft.com/pl-pl/windows/microsoft-edge");
    firefoxLink.setAttribute("href","https://www.mozilla.org/pl/firefox/new/");
   
    //ZADANIE 2

    var name = document.querySelector('.ex2 #name');
    var name = document.querySelector('.ex2 #fav_color');
    var name = document.querySelector('.ex2 #fav_meal');

    name.innerHTML = "Damian Lasoń";
    color.innerHTML = "Blue";
    name.innerHTML = "Pizza";

    //ZADANIE 3

    var ulEx3 = document.querySelector('.ex3 ul');
    ulEx3.classList.add("menu");

    var liEx3 = document.querySelectorAll('.ex3 li');

    for(var element of liEx3){
        if(element.classList.contains("error")){
            element.classList.remove("remove");
        }
        if(element.classList.contains("menuElement")){
            element.classList.remove("menuElement");
        }
    }

    //ZADANIE 4
     var liEx4 = document.querySelectorAll('.ex4 li');
     for(var i=0;i<liEx4.length; i++){
         liEx4[i].dataset.id=i+1;
     }


});