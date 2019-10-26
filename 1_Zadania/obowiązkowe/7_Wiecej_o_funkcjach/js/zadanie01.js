
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Stworzenie funkcji sortArray
function sortArray() {

    //Zadeklarowanie tablicy points
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Posortowanie tablicy points
    points.sort(function (a, b) {
        //Użycie funkcji porównania, ponieważ domyślnie funkcja 'sort' sortuje wartości jako ciągi znaków. Używając takiego porównania tablica zostanie posortowana rosnąco, jednak jeśli chcielibyśmy posortować ją malejąco, musielibyśmy użyć zapisu b - a 
        return a - b;
    });

    //Zwrócenie posortowanej już tablicy 'points'
    return points;
}

//Wywołanie funkcji sortArray
sortArray();
