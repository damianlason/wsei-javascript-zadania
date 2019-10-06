const distFromAvarage = (arr) => {
    let avg;
    let sum = 0;
    arr.forEach(item => {
        sum += item;
    })

    avg = sum / arr.length;
    let newArr = [];

    arr.forEach(item => {
        newArr.push(item - avg);
    })

    console.log(newArr);
    return newArr;
}

distFromAvarage([1,2,3,4,5,6,7])

//ZADANIE 1

const fruits = ["apple", "orange", "banana", "strawberry"];

console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
fruits.forEach(fruit => {
    console.log(fruit)
});

//ZADANIE 2

//ZADANIE 3
function printTable(array){
    for (var i=0; i<=array.length; i++)
    {
        console.log(array[i]);
    }
}
printTable([1,2,3,4,]);

//ZADANIE 4
function multiply(array){
    let sum = 1;
    for(var i = 0;i<array.length; i++){
        sum *= array[i];
    }
    console.log(sum);
    return sum;
}

multiply([1,2,3,4,5,6,7]);