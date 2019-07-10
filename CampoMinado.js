var posicao = [[], [], [], [], [], [], [], [], [], []];

function campo(x, y, bomb, abrir){
    console.log(posicao);
    //tabuleiro
    for(let x = 0; x < 10; x++){
        for(let y = 0; y < 10; y++){
            posicao[x][y] = 0;
            console.log("");
            console.log(posicao);
        }
    }
    //bomba
    for(let i = 0; i < 10; i++){
        console.log("");
        posicao[Math.floor(Math.random() * 10)][Math.floor(Math.random() * 10)] = "x";
    }
    //numeros em volta da bomba
    var a = 0;
    for(let j = 0; j < 10; j++){
        for(let l = 0; l < 10; l++){
            if(posicao[j][l] != "x"){
                if(l > 0 && posicao[j][l - 1] === "x") a++;
                if(l < 10 && posicao[j][l + 1] === "x") a++;
                if(j < 10 && posicao[j + 1][l] === "x") a++;
                if(j > 0 && posicao[j - 1][l] === "x") a++;
                if(j < 10 && l > 0 && posicao[j + 1][l - 1] === "x") a++;
                if(j < 10 && l < 10 && posicao[j + 1][l + 1] === "x") a++;
                if(j > 0 && l > 0 && posicao[j - 1][l - 1] === "x") a++;
                if(j > 0 && l < 10 && posicao[j - 1][l + 1] === "x") a++;
                posicao[j][l] = a;
                a = 0;
                console.log("");
                console.log(posicao);
            }
        }
    }
    
}
campo(0, 0);