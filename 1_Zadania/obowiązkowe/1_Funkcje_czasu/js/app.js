function countHello(number){
    var counter = 1,
        answer;
    var interval = setInterval(()=>{
        if(counter == number){
            clearInterval(interval);
        }
        answer = "Hello" + counter;
        counter++;
        return answer;
    }, 500)
}
countHello(5);