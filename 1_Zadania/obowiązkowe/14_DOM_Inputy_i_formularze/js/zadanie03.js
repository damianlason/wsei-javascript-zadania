document.addEventListener("DOMContentLoaded", function(){

    var team1 = document.getElementById("team1"),
        points1 = document.getElementById("points1"),
        team2 = document.getElementById("team2"),
        points2 = document.getElementById("points2"),
        button = document.querySelector("button"),
        table = document.querySelector("table");

        button.type="button";

    button.addEventListener('click', Check);

    function Check(){    
        if(team1.value != team2.value && points1.value > 0 && points2.value > 0){
            var row = table.insertRow(3),
            cell1 = row.insertCell(0),
            cell2 = row.insertCell(1),
            cell3 = row.insertCell(2);
            cell1.innerHTML = team1.value;
            cell2.innerHTML = team2.value;
            cell3.innerHTML = points1.value + ' - ' + points2.value;
        }
     }
});