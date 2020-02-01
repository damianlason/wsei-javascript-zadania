document.addEventListener("DOMContentLoaded",function(){
    
    var li = document.querySelectorAll("li"),        
        div,
        img,
        divclose;
    for (var i=0; i<li.length;i++){
        li[i].addEventListener("click", click);
    }
    function click(){
        div = document.createElement("div");
        div.className = "fullScreen";
        img = document.createElement("img");
        img.src = this.children[0].src;
        divclose = document.createElement("div");
        divclose.className = "close";
        divclose.innerHTML = "X";
        divclose.style.fontSize = 30 + "px";
        divclose.style.position = "absolute";
        divclose.style.top = 0 + "px";
        divclose.addEventListener("click", close);
        div.appendChild(img);
        div.appendChild(divclose);
        document.body.appendChild(div);
    }
    function close(){
        div.remove();
    }
})

//NIE BYŁO ŻADNEGO KOMENTARZA NA GÓRZE PLIKU (PUNKT 5)!