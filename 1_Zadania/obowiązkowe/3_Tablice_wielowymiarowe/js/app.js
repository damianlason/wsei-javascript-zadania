// ZADANIE 0

function checkArray(table){
  var numberOfIndexes = table.length;
  var result=[];
  for(var i=0; i<numberOfIndexes; i++){    
    if(table[i][0]%2==0){
      result.push(true);
    }
    else{
      result.push(false);
    }
  }  
console.log(result);
}

var arr = [[11, 12],[42, 2],[-4, -120],[0, 0],[1, 34],];

checkArray(arr);

// ZADANIE 1

var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

//wypisuję elementy licząc od 1, nie od 0 

console.log(task1Array[2][1]); 
console.log(task1Array[1].length);
console.log(task1Array[3][1]);

// ZADANIE 2

var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11,12]
];
var length = task2Array.length;

console.log("Pierwszy wymiar tablicy:");
for(var i=0; i<length;i++){
  console.log(task2Array[i]);
}

console.log("Długość tablic drugiego wymiaru:")
for(var i=0; i<length; i++){  
  console.log(task2Array[i].length);  
}

console.log("Drugi wymiar tablicy:");
for(var i=0; i<length; i++){
  for(var j=0; j<task2Array[i].length; j++){
    console.log(task2Array[i][j]);
  }
}   

//ZADANIE 3

function print2DArray(array){
    var length = array.length;
    
    for(var i=0; i<length; i++){
        for(var j=0; j<array[i].length; j++){
          console.log(array[i][j]);
        }
      }   
}

//ZADANIE 4

var table = [[1], [2,3,4,5,6], [7,8,9,10,11,12,13]];
print2DArray(table);

//ZADANIE 5

