//soma
function resultado(n1, n2){
    op = "+";
    var soma = n1 + n2;
    console.log(n1 + " + " + n2 + " = " + soma);
}

//divisao
function resultado2(n1, n2){
    op = "/"
    var soma = n1 / n2;
    console.log(n1 + " / " + n2 + " = " + soma);
}

//subtração
function resultado3(n1, n2){
    op = "-";
    var soma = n1 - n2;
    console.log(n1 + " - " + n2 + " = " + soma);
}

//*
function resultado4(n1, n2){
    op = "*";
    var soma = n1 * n2;
    console.log(n1 + " x " + n2 + " = " + soma);
}

//verificando valores se sao numeros
function valores(n1, n2, op){
    if(op == "+" && +n1 && +n2){
        resultado(+n1,+n2);
        console.log("+");
    }else if(op == "/" && +n1 && +n2){
        resultado2(n1,n2);
        console.log("/");
    }else if(op == "-"  && +n1 && +n2){
        resultado3(n1,n2);
        console.log("-");
    }else if(op == "*"  && +n1 && +n2){
        resultado4(n1,n2);
        console.log("*");
    }else{
        console.log("Erro");
    }
}
valores("s", "s", "+");