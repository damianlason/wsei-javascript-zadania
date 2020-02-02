var a = document.querySelectorAll("a");
a[0].addEventListener("click",function(){
    this.parentElement.children[2].style.display = "block";
});
a[1].addEventListener("mouseover",function(){
    this.parentElement.children[2].style.display = "block";
});