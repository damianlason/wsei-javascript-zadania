//pkt 1

var first = document.getElementsByClassName("first")[0],
    firstChildPkt1 = first.children[0],
    thirdChild = firstChildPkt1.children[2];

    console.log(thirdChild);

//pkt 2

var second = document.getElementById("second"),
    secondParent = second.parentElement,
    secondParentChild = secondParent.children[3];

    console.log(secondParentChild);
    
//pkt 3

var dataEx = document.querySelector("[data-ex='third']"),
    grandFather = dataEx.parentElement.parentElement,
    lastChild = grandFather.lastElementChild,
    firstChildPkt3 = lastChild.firstElementChild,
    centerChild = firstChildPkt3.children[Math.floor(firstChildPkt3.childElementCount/2)];
 
    console.log(centerChild);

//pkt 4

var forth = document.getElementsByClassName("forth")[0],
    forthParent = forth.parentElement,
    firstChildArticle;

    for(var i=0;i<forthParent.childElementCount;i++){
        if(forthParent.children[i].tagName == "ARTICLE"){
            firstChildArticle = forthParent.children[i];
        }
    }

    var secondChildP,
        pCounter = 0;

    for(var j=0; j<firstChildArticle.childElementCount;j++){
        if(firstChildArticle.children[j].tagName == "P"){ 
            if(pCounter == 1){
                secondChildP = firstChildArticle.children[j];
            }        
            pCounter++;
        }
    }

    console.log(secondChildP);
