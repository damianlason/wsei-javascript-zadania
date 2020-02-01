// 1. Pobranie informacji z atrybutu data:
var menu = document.getElementById("menu");
function getDataInfo(table){
    let tabLi = [];
    for(let i =0;i<table.children.length;i++){
        tabLi.push(table.children[i].dataset.info);
    }
    return tabLi;
}

// 2. Szukanie elementu po id:
var main_contener = document.getElementById("main-contener");
function getElementClass(classList){
    let tabClass = [];
    for(let i =0;i<classList.children.length;i++){
        tabClass.push(classList.children[i].className);
    }
    return tabClass;
}

//3. Szukanie elementu po klasie:
var pink_color = document.getElementsByClassName("pink-color");
function getElementText(pink){
        let pinkColor = pink;
        return pinkColor[0].innerHTML;
}

//4. Szukanie elementu po klasie:
var images = document.getElementsByClassName("images");
function getElementAlt(imagesALT){
    let tabImages = [];
    for(let i =0;i<imagesALT.length;i++){
        tabImages.push(imagesALT[i].alt);
    }
    return tabImages;
    
}

//5. Szukanie elementu po klasie:
var my_link = document.getElementsByClassName("my-link");
function getElementHref(My_Link){
    let tabMy_link = [];
    for(let i =0;i<My_Link.length;i++){
        tabMy_link.push(My_Link[i].href);
    }
    return tabMy_link;
    
}