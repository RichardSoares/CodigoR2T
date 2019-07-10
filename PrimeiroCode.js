//Declarando variaveis
var numero = 3;

//Outro meio de declarar uma variavel
let numero2 = 2;

//Mostrando na tela, com concatenação "+"
console.log(numero + " e " + numero2);

//Fazendo soma com variavel
var soma;
soma = numero + numero2;
console.log("Minha soma é " + soma);

//usando if e else
if(numero == 3){
    console.log("Correto");
}else{
    console.log("Falso");
}

//if e else testando duas condições
if(numero == 3 && numero2 == 2){
    console.log("Correto");
}else{
    console.log("Falso");
}
//ou
if(numero == 3 || numero2 == 2){
    console.log("Correto");
}else{
    console.log("Falso");
}
//usando as condições juntas
if((numero == 3 || numero2 == 2) && soma == 5){
    console.log("Correto");
}else{
    console.log("Falso");
}

//usando switch case
switch(numero){
    case 3:
        console.log("Correto")
        break;
    
    case 2:
        console.log("Correto");
        break;
    default:
        console.log("Os dois estão errados");
}

//usando funções
function funcoes(){
    console.log("função");
}

//usando a função com tempo marcado
setTimeout(function(){
    funcoes();
}, 5000);