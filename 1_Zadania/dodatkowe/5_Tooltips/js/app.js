document.addEventListener("DOMContentLoaded",function(){
    var tooltip = document.querySelectorAll(".tooltip");
        tooltipOne = tooltip[0],
        tooltipTwo = tooltip[1],
        tooltipThree = tooltip[2],
        div = document.createElement("div");

    tooltipOne.addEventListener("mouseover", mouseover);
    tooltipOne.addEventListener("mouseout", mouseout);
    tooltipTwo.addEventListener("mouseover", mouseover);
    tooltipTwo.addEventListener("mouseout", mouseout);
    tooltipThree.addEventListener("mouseover", mouseover);
    tooltipThree.addEventListener("mouseout", mouseout);
    
    function mouseover(){            
            div.className = "tooltipText";
            div.innerHTML = this.dataset.text;
            console.log(this.dataset.text)
            this.appendChild(div);
    }
    function mouseout(){
        div.remove();
    }
});
