document.addEventListener("DOMContentLoaded", function(){
    var addBtn = document.getElementById("addBtn"),
        table = document.getElementById("orders");
    
    addBtn.addEventListener('click', click);
    
    var orderId = "",item = "",quantity = "",tr="",td="";
    
    function click(){
        orderId = document.getElementById("orderId");
        item = document.getElementById("item");
        quantity = document.getElementById("quantity");
        tr = document.createElement("tr");
        td = document.createElement("td");
        td.innerHTML = orderId.value;
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = item.value;
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = quantity.value;
        tr.appendChild(td);
        table.appendChild(tr);
    }    
});