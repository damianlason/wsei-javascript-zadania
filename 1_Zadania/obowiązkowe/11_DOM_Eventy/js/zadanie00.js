
document.addEventListener("DOMContentLoaded", function () {

    //ZADANIE 0A

    var parent = document.querySelectorAll("div.parent");
    var children = document.querySelectorAll("div.parent .children");

    parent[0].addEventListener("mouseover", function() {
        children[0].style.display = "block";
    })

    parent[1].addEventListener("mouseover", function() {
        children[1].style.display = "block";
    })

    parent[2].addEventListener("mouseover", function() {
        children[2].style.display = "block";
    })
    parent[0].addEventListener("mouseout", function() {
        children[0].style.display = "none";
    })

    parent[1].addEventListener("mouseout", function() {
        children[1].style.display = "none";
    })

    parent[2].addEventListener("mouseout", function() {
        children[2].style.display = "none";
    })

    //ZADANIE 0B

    parent[0].addEventListener("mouseover", function() {
        let children = this.children[0];
        function hideChildrenElement(){
            children.style.display = "block";
        }
        hideChildrenElement();
    })
    parent[0].addEventListener("mouseout", function() {
        let children = this.children[0];
        function hideChildrenElement(){
            children.style.display = "none";
        }
        hideChildrenElement();
    })
    parent[1].addEventListener("mouseover", function() {
        let children = this.children[0];
        function hideChildrenElement(){
            children.style.display = "block";
        }
        hideChildrenElement();
    })
    parent[1].addEventListener("mouseout", function() {
        let children = this.children[0];
        function hideChildrenElement(){
            children.style.display = "none";
        }
        hideChildrenElement();
    })
    parent[2].addEventListener("mouseover", function() {
        let children = this.children[0];
        function hideChildrenElement(){
            children.style.display = "block";
        }
        hideChildrenElement();
    })
    parent[2].addEventListener("mouseout", function() {
        let children = this.children[0];
        function hideChildrenElement(){
            children.style.display = "none";
        }
        hideChildrenElement();
    })

});