document.addEventListener("DOMContentLoaded",function(){
    var ul = document.getElementsByTagName("ul")[0].children,
        tableWithUl = [];
    for(var i=0;i<ul.length;i++){
        tableWithUl.push(ul[i]);
    }    

    for(var i=0;i<ul.length;i++){
        ul[i].addEventListener("mouseover", mouseoverUl);
        ul[i].addEventListener("mouseout", mouseoutUl);
    };
    function mouseoverUl(){
        if(this.children.length > 0){
            this.children[0].children[0].style.display = "block";
            this.children[0].style.display = "block";
        }
    }
    function mouseoutUl(){
        if(this.children.length > 0){
            this.children[0].children[0].style.display = "none";
            this.children[0].style.display = "none";
        }
    }
});
    
