document.addEventListener("DOMContentLoaded", function(){

	var width = document.getElementById("windowWidth"),
        height = document.getElementById("windowHeight");
        
        showSize = function(){       
            width.innerHTML = window.innerWidth;
            height.innerHTML = window.innerHeight;
        }
        showSize();
        window.addEventListener("resize", showSize);
});