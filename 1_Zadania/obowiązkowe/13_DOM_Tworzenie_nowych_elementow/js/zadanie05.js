document.addEventListener("DOMContentLoaded", function(){

    var a = document.querySelectorAll("a.moveBtn");

    for(var i = 0;i<a.length;i++){
        a[i].addEventListener('click', click);
    }

    var li,
        id, 
        timeLi,
        list1 = document.getElementById("list1"),
        list2 = document.getElementById("list2");
    
        function click(){
        li = this.parentElement;
        id = document.getElementById(this.parentElement.parentElement.id);
        timeLi = this.parentElement.parentElement.id;
        id.removeChild(li);
        
        if(timeLi == "list1"){
            list2.appendChild(li);
        }
        else{
            list1.appendChild(li);
        }
    }    
});