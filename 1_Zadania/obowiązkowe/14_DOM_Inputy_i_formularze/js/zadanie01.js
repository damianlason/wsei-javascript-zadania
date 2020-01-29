document.addEventListener("DOMContentLoaded", function(){

    var invoiceData = document.getElementById("invoiceData");
    invoiceData.style.display = "none";
    var invoice = document.getElementById("invoice");
    invoice.addEventListener('click', click);
    function click(){
        CheckboxCheck();
    }
    function CheckboxCheck(){
        if(invoice.checked == true){
            invoiceData.style.display = "block";
        }else{
            invoiceData.style.display = "none";
        }
    }
});