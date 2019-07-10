let date = new Date();

//split
let string = "12/12/2012";
let arr = string.split("/");
//replace - Substituição de caracteres
let arr2 = string.replace(/(\.|\-)/g, "");

//convertendo datas para data BR
//Join - Transforma array em string
//Reverse - Faz com que a array reverte do fim para o começo
console.log(date.toISOString().split("T")[0].split("-").reverse().join("/"));
//Forma mais facil
console.log(date.toLocaleDateString());

//Mexendo em data, hora, ano etc
let date2 = new Date("2019-07-28T12:00");
//Data
date2.setDate(date2.getDate() + 7);
console.log(date2);