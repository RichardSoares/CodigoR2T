let arr = [];
function calendario(dia, mes, ano, hora, evento){
    if(arr.length){
        let flag = true;
        for(let i = 0; i < arr.length; i++){
        if(arr[i].dia != dia || arr[i].mes != mes || arr[i].ano != ano || arr[i].hora != hora)
        {
        }else{
            flag = false;
        }
    }
    //Verificação se ja existe um dia marcado com flag
    if(flag){
        arr.push({dia: dia, mes: mes, ano: ano, hora: hora, evento: evento});
        console.log(arr);
        console.log("Agendado!")
    }else{            
        console.log(arr);
        console.log("Essa data já tem um evento, não agendado!");
    }
    //
    }else{
        arr.push({dia: dia, mes: mes, ano: ano, hora: hora, evento: evento});
    }
}
function agenda(dia, mes, ano){
    for(let j = 4; j < 23; j++){
        for(let g = 0; g < arr.length; g++){
            console.log((j < 10 ? "0" : "") + j + ":00 = " + arr[g].dia + "/" + arr[g].mes + "/" + arr[g].ano + " Evento: " + arr[g].evento);
        }
    }
}
calendario(02, 02, 2012, "20:00", "wedfcwef");
agenda(10, 10, 10);