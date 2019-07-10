//Declarando um array
let compras = [10, 11, 12, 13, 14, 15];
//Mostrando posição do array compras
console.log(compras[1]);

//Array dentro de um array, ou matriz
let compras2 = [[1, 2], [2, 3], [3, 4]];
//Mostrando posição em outra posição
console.log(compras2[1][1]);

//Usando Json como array
let user = {nome: "Richard", idade: 17, altura: 1.69};
//Acessando o Json pelo nome da variavel
console.log(user.nome);

//Json dentro de um Json
let user2 = {nome: "Richard", end: {num: 2, logr: "Rua 9 de Julho"}}
//Acessando posição de dois Json
console.log(user2.end.logr);

