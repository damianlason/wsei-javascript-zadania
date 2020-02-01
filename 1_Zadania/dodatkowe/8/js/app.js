// Zadanie 1

var Tree = function (typeCheck){
    this.type = typeCheck;
}
Tree.prototype.bloom  = function(){
    return "I am blooming ";
}


var TreeCheck = new Tree("sosna"),
    TreeCheck = new Tree("dab"),
    TreeCheck = new Tree("swierk");
console.log(TreeCheck.type);
TreeCheck.bloom();