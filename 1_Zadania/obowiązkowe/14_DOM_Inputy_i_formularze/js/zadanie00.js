document.addEventListener("DOMContentLoaded", function(){

    var pass1 = document.getElementById("pass1"),
        pass2 = document.getElementById("pass2"),
        email = document.getElementById("email"),
        name = document.getElementById("name"),
        surname = document.getElementById("surname"),
        button = document.querySelector("button"),
        divErrorMessage = document.querySelector("div.error-message"),
        form = document.querySelector("form"),
        agree = document.getElementById("agree"),
        can = false,
        canPush = false;
    
        button.addEventListener('click', click);
        
    function click(){
        canPush = true;
        CheckMail();
        CheckName();
        CheckSurname();
        CheckboxCheck();
        if(pass1.value.length > 0 && pass2.value.length > 0){
            pass();
        }
        if(canPush == true){
            button.type = "submit";
            form.action = "http://api.coderslab.pl/showpost.php";
        }
        else{
            form.action = "";
        }
    }
    function CheckMail(){
        for(var i = 0; i < email.value.length;i++){
            if(email.value[i] == "@"){
                can = true;
            }
        }
        if(can == false){
            divErrorMessage.innerHTML =  "Email musi posiadać znak @";
            canPush = false;
        }
    }
    function CheckName(){
        if (name.value.length < 6) {
            divErrorMessage.innerHTML = "Twoje imię jest za krótkie";
            canPush = false;
        }
    }
    
    function CheckSurname(){
        if (surname.value.length < 6) {
            divErrorMessage.innerHTML = "Twoje nazwisko jest za krótkie";
            canPush = false;
        }
    }
    function pass(){
        if(pass1.value == pass2.value){}
        else{
            divErrorMessage.innerHTML = "Hasła nie są takie same lub puste";
            canPush = false;
        }
    }
    function CheckboxCheck(){
        if(agree.checked == true){}
        else{
            divErrorMessage.innerHTML = "Musisz zaakceptować warunki";
            canPush = false;
        }
    }
});