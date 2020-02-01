document.addEventListener("DOMContentLoaded",function(){
    var taskList = document.getElementById("taskList"),
        addTaskButton = document.getElementById("addTaskButton"),
        removeFinishedTasksButton = document.getElementById("removeFinishedTasksButton"),
        li,h1,button,buttonDelete,taskInput,tasks = [],
        counter = document.getElementById("counter"),
        counterLi = 0;

    addTaskButton.addEventListener("click", click);
    
    removeFinishedTasksButton.addEventListener("click", removeAll);

    counter.innerHTML = "Ilość tasków : " +counterLi;
    function click(){
        taskInput = document.getElementById("taskInput");
        if(taskInput.value.length > 5 && taskInput.value.length < 100){
            li = document.createElement("li");
            h1 = document.createElement("h1");
            h1.innerHTML = taskInput.value;
            button = document.createElement("button");
            button.innerHTML = "Complete";
            button.addEventListener("click",clickComplete);
            buttonDelete = document.createElement("button");
            buttonDelete.innerHTML = "Delete";
            buttonDelete.addEventListener("click",clickDelete);
            li.appendChild(h1);
            li.appendChild(button);
            li.appendChild(buttonDelete);
            tasks.push(li);
            taskList.appendChild(li);
            taskInput.value = "";
            counterLi = counterLi + 1;
            counter.innerHTML = "Ilość tasków : " +counterLi;
        }
    }
    function clickComplete(){
        if(this.parentElement.children[0].style.color == "red"){
            this.parentElement.children[0].style.color = "black";
            counterLi = counterLi + 1;
            counter.innerHTML ="Ilość tasków : " + counterLi;
        }
        else{
            this.parentElement.children[0].style.color = "red";
            counterLi = counterLi - 1;
            counter.innerHTML ="Ilość tasków : " + counterLi;
        }
    }
    function clickDelete(){
        this.parentElement.remove();
        if(this.parentElement.children[0].style.color == "red"){

        }
        else{
            counterLi = counterLi - 1;
            counter.innerHTML ="Ilość tasków : " + counterLi;
        }
    }
    function removeAll(){       
        for(var i=0;i<tasks.length;i++){
            if(tasks[i].children[0].style.color == "red"){                
                tasks[i].remove();
            }                        
        }        
    }
});