// var menu = document.querySelector("#menu");
// var paragraf = document.querySelector("p");

// menu.classList.add("menu");
// paragraf.innerHTML = "A to jest paragraf w zadaniu 1";

//pkt 1 
// Skrypt szybciej ładuje się z pliku html nniż z JS, przez co nie widzi elemetu o id menu
// i przypisuje niego wartość null.

//pkt 2

// document.addEventListener("DOMContentLoaded", function(){
//     var menu = document.querySelector("#menu");
//     var paragraf = document.querySelector("p");    
//     menu.classList.add("menu");
//     paragraf.innerHTML = "A to jest paragraf w zadaniu 1";    
// });

// Poprawiło to sytuację, ponieważ najpierw załadował się DOM a dopiero później został wykonany skrypt.

//pk3

// Nie ma żadnej różnicy, ponieważ skrypt został wywołany po załadowaniu się kodu HTML
