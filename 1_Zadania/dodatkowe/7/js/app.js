//ZADANIE 1

function getNumber(number, table){
    var result;
    for(var i=0; i<table.length;i++){
        if(table[i] == number){
            result = true;
            return result;   
        }        
    }
    if(result != true){
        return false;
    }
}

//ZADANIE 2

getNumber(2, [33, 54, 2, 1, 4, 100]);

    function createIdentityMatrix(rows,columns){
        var counter = 0,table =  new Array(rows);
        for(var h =0;h<rows;h++){
            table[h] =  new Array(columns);
            for(var j =0;j<columns;j++){
                if(counter == j){
                    table[h][counter] = 1;
                }
                else{
                    table[h][j] = 0;
                }
            }
            counter = counter + 1;
        }
        return table;
    }


