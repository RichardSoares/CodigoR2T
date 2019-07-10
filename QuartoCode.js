//usando for como laço de repetição
for(let cont = 0; cont < 10; cont++){
    console.log("Posição: " + cont);
}

//usando while como repetição e array
let safe = ["carro", "moto", "batata", "fdp", "lesma", "cachorro"], i = 0;
while(safe[i] != "fdp"){
    console.log("Pode seguir " + safe[i]);
    i++;
}

//usando for in como repetição
let zone = ["carro", "moto", "batata", "fdp", "lesma", "cachorro"], cont = 0;
for(let cont in zone){
    console.log(zone[cont]);
}
//o for in tambem pode ser usando com um json
let Json = {nome: "Richard", idade: 17, alt: 1.69}
for(let cont in Json){
    console.log(Json[cont]);
}

//usando do while como repetição
let conti = 0;
do{
    console.log(conti);
    conti++;
}while(conti < 5);

//usando lenght para contar as posições
let batata = ["1", "2", "batata", "2", "1", "cachorro"];
for(let cont = 0; cont < batata.length; cont++){
    console.log(batata[cont]);
}

//adicionando novo item dentro de um array
let arr = ["1", "2", "arr", "2", "1", "arr"];
//adicionando
arr.push("ponto final");
console.log(arr);
//excluindo a ultima posição do array
let aux = arr.pop();
console.log(arr);
//devolvendo a posição excluida
console.log(aux);

//copiando os valores de um array e depois alterando sem alterar os dois ao mesmo tempo
let ata = ["1", "2", "ata", "2", "1", "bab"], bab = [];
bab = [...ata];
ata.push("asdadad");
console.log(ata);
console.log(bab);