document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
        
   //ZADANIE 0
    
    function getDatasInfo(elements){
        var elementsCounter = elements.length;
        var newTable = [];
        for(var i = 0; i<elementsCounter; i++){
            newTable.push(elements[i].dataset);
        }
        console.log(newTable);
        
    }    
    getDatasInfo(links);
    
    //ZADANIE 1

    console.log("homeElement");
    console.log(homeElement);
      
    console.log("childElements"); //tablica
    console.log(childElements)
        
    console.log("banner");
    console.log(banner);
    
    console.log("blocks"); //tablica
    console.log(blocks);
        
    console.log("links"); //tablica
    console.log(links);
    
    var childElementsLength = childElements.length,
        blocksLength = blocks.length,
        linksLength = links.length;
    
    for(var i=0; i<childElementsLength; i++){
        console.log("tag: " + childElements[i].tagName + " klasa: " + childElements[i].className)
    };
    
    for(var i=0; i<blocksLength; i++){
        console.log("tag: " + blocks[i].tagName + " klasa: " + blocks[i].className)
    }
    
    for(var i=0; i<linksLength; i++){{
        console.log("tag: " + links[i].tagName + " klasa: " + links[i].className)
    }}
 
   
    //ZADANIE 2
    
    console.log("innerHTML: ");
    for(var i=0; i<blocksLength; i++){
        console.log(blocks[i].innerHTML = "Nowa wartość diva o klasie blocks");
    }
    console.log("outerHTML: ");
    for(var i=0; i<blocksLength; i++){
        console.log(blocks[i].outerHTML);
    }
    
    //innerHTML = HTML wewnątrz wybranego elementu.
    //outerHTML = HTML wewnątrz wybranego elementu + HTML wybranego elementu.
    
    //ZADANIE 3
    
    var footer = document.getElementById("mainFooter");
    
    function getId(element){
        var id = element.id;
        console.log("Nazwa id to "+id);
    }
    
    getId(footer);
    
    //ZADANIE 4
    
    function getTags(elements){
        var elementsCounter = elements.length;
        var newTable = [];
        for(var i = 0; i<elementsCounter; i++){
            newTable.push(elements[i].tagName);
        }
        console.log(newTable);
    }
    
    getTags(childElements);
    
    //ZADANIE 5
    function getClassInfo(element){
        var newTable = [];
        newTable.push(element.className);
        console.log(newTable);
    }
    getClassInfo(banner);
    
    //ZADANIE 6
    var liInsideNav = document.querySelectorAll('nav li');
    console.log(liInsideNav);
    
    function setDataDirection(elements){
        var liCounter = elements.length;
        for(var i=0; i<liCounter; i++){
            if(elements[i].dataset.direction==null){
                elements[i].dataset.direction="top";
            }
        }
    }
    setDataDirection(liInsideNav);


});
