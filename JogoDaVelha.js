let cont = 0, qntd = 0, coord = [[],[],[]], turno;

function play(x, y, jogador){
    if(jogador != "x" && jogador != "o"){
        console.log("Jogador Invalido")
    }else{
        if(jogador == turno){
            console.log("Nao pode jogar");
        }else{
            if(x >= 0 && x <= 2 && y >= 0 && y <=2){
                if(coord[x][y]){
                    console.log("Nao pode jogar nessa coordenada")
                }else{
                    coord[x][y] = jogador
                    cont++;
                    turno = jogador;
                    
                    //variaveis para verificação
                    let ver = hor = diagL = diagR = 0;

                    for(let j = 0; j < 3; j++){
                        //verifica horizontal e vertical
                        if(coord[x][j] == jogador) ver++;
                        if(coord[j][y] == jogador) hor++;
                        //verifica a diagonal direita
                        if(x == y || x + y == 2){
                        //veriffica a diagonal esquerda
                            if(coord[j][j] == jogador) diagL++;
                            if(coord[j][j == 0 ? 2 : j == 1 ? 1 : 0] == jogador) diagR++;
                        }
                    }
                    
                    //Desenho do jogo
                    for(let i = 0; i< 3; i++){
                        let line = "";
                        for(let g = 0; g < 3; g++){
                            line += coord[i][g] || "";
                            if(g != 2) line += "|";
                        }
                        console.log(line);
                        if(i != 2) console.log("-----");
                    }

                    if(ver == 3 || hor == 3 || diagL == 3 || diagR == 3){
                        cont = 0;
                        console.log(turno + " Venceu !");
                    }else if(cont == 9){
                        console.log("Empate!")
                    }
                }
            }else{
                console.log("Coordenada Invalida!");
            }
        }
    }
}
play(1, 1, "x");
