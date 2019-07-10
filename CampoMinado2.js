const input =
`10 20
*.....*......*...***
.........*...**.....
.*....*............*
....*.......*.......
.......*.........**.
.*.*....*...**......
........*..........*
...*..........*.....
.*......*...........
.....*.............*
6 8
**......
......*.
.*......
......*.
..**...*
........
0 0`

let lines = input.split("\n"); //Aqui faz a quebra de linha, transformando em um array para cada enter
let cont = 0;
let contCampo = 1;

function campoMinado(campo, numColuna) {
    let campoCheio = [];
    for (let i = 0; i < campo.length; i++) {
        let line = [];
        for (let j = 0; j < numColuna; j++) {
            //para cada item que esiver na linha, precisa checar se é uma mina ou vazio
            if (campo[i].charAt(j) === "*") {
                line.push("*");
            } else {
                line.push(0);
            }
        }
        campoCheio.push(line);
        //console.log(campo[i])
    }
    //contagem das bombas
    for (let i = 0; i < campo.length; i++) {
        for (let j = 0; j < numColuna; j++) {
            if (campoCheio[i][j] !== "*") {
                if (i > 0) {
                    if (j > 0) {
                        if (campoCheio[i - 1][j - 1] === "*") campoCheio[i][j]++;
                    }
                    if (campoCheio[i - 1][j] === "*") campoCheio[i][j]++;
                    if (j + 1 < numColuna) {
                        if (campoCheio[i - 1][j + 1] === "*") campoCheio[i][j]++;
                    }
                }

                if (j > 0) {
                    if (campoCheio[i][j - 1] === "*") campoCheio[i][j]++;
                }
                if (j + 1 < numColuna) {
                    if (campoCheio[i][j + 1] === "*") campoCheio[i][j]++;
                }

                //contagem invertida esquerdo
                if (i + 1 < campoCheio.length) {
                    if (j > 0) {
                        if (campoCheio[i + 1][j - 1] === "*") campoCheio[i][j]++;
                    }
                    if (campoCheio[i + 1][j] === "*") campoCheio[i][j]++;
                    if (j + 1 < numColuna) {
                        if (campoCheio[i + 1][j + 1] === "*") campoCheio[i][j]++;
                    }
                }
            }
        }
    }
    for (let i = 0; i < campo.length; i++) {
        console.log(campoCheio[i].join(""));
    }
    console.log("");
}
do {
    line = lines[cont++];
    let numeros = line.split(' '); //Quando for numero ele retorna os dois numeros para dentro do array, se nao ele retorna apenas o item
    //Pega a linha 17 e checa se ela é dois numeros
    if (numeros.length === 2) {
        const numLinha = parseInt(numeros[0]);
        const numColuna = parseInt(numeros[1]);
        //Se for diferente de 0 começa a fazer os campos
        if (numLinha !== 0 && numColuna !== 0) {
            console.log("===========");
            console.log("Campo " + contCampo)
            console.log("")
            campoMinado(lines.slice(cont, cont + numLinha), numColuna)
            contCampo++;
        }

    }
} while (line !== "0 0");