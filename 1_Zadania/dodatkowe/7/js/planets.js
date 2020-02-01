var planets = [
    {
        name: "Merkury",
        numberOfMoons: 0
    },
    {
        name: "Wenus",
        numberOfMoons: 0
    },
    {
        name: "Ziemia",
        numberOfMoons: 1
    },
    {
        name: "Mars",
        numberOfMoons: 2
    },
    {
        name: "Jowisz",
        numberOfMoons: 63
    },
    {
        name: "Saturn",
        numberOfMoons: 60
    },
    {
        name: "Uran",
        numberOfMoons: 27
    },
    {
        name: "Neptun",
        numberOfMoons: 13
    }
];

var table = planets;
var tableValuesPlanets = [];
var tableValues = [];
var tableValuesPlanetsFinally = [];
for(let w=0;w<table.length;w++){
    tableValues.push(table[w].numberOfMoons);
    tableValuesPlanets.push(table[w]);
}
function sort(table){
    var tab = [];
    var max = 0;
    var which = 0;
    var w=0;
    var size = table.length-1;
    for(var q=0;q<table.length;q++){
        tab.push(0);
    }
    for(q=0;q<table.length;q++){
        for(w=0;w<table.length;w++){
            if(max < table[w]){
                max = table[w];
                which=w;
            }
        }
        table[which]=0;
        tab[size]=max;
        max=0;
        size = size-1;
    }
    return tab;
}
function sortPlanet(counter,tablePlanet){
    for(var l=counter.length;l>0;l--){
        for(var t=0;t<tablePlanet.length;t++){
            if(counter[l] == tablePlanet[t].numberOfMoons){
                tableValuesPlanetsFinally.push(tablePlanet[t]);
            }
        }
    }
    return tableValuesPlanetsFinally;
}
console.log(sortPlanet(sort(tableValues),tableValuesPlanets));