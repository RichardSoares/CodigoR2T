//Comandos de tempo
setTimeout(function(){
    console.log("Passou 2 segundos");
}, 2000);

/*
setInterval(function(){
    console.log("passou 5 segundos")
}, 5000);
*/

//setInterval com parada
let interval = setInterval(function(){
    cont++;
    console.log("Cont " + cont);
    //limpar o intervalo
    if(cont == 1){
        clearInterval(interval);
        console.log("Parada do Cont");
    }
}, 5000), cont = 0;

//usando uma função anonima
function calc(um, dois, callback){
    console.log("Aqui eu to na calc");
    callback(um + dois);
}
calc(1, 2, function(conta){
    console.log("Aqui eu to na anonima");
    console.log("Meu resultado é " + conta);
});

//Recursividade, quando algo chama ela mesma
function recursiva(num){
    console.log(num);
    //Condição para que não de o resultado ininity
    if(num < 100) recursiva(num * 2);
}
recursiva(1);
//numeros aleatorios
console.log(Math.floor(Math.random() * 3));  