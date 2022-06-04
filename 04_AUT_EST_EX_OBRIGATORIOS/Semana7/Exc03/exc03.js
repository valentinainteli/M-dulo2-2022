function conferir(){
    var cel = document.getElementById('cel').value;
    if (Number(cel[2]) & Number(cel[1]) & Number(cel[4]) & Number(cel[5]) & Number(cel[6]) & Number(cel[7]) & Number(cel[8]) & Number(cel[10]) & Number(cel[11]) & Number(cel[12]) & Number(cel[13])) 
       { console.log("aprovado primeira etapa")}
    else {alert ('Use somente números')}
    if(cel[0] == '(' & cel[3] == ')' & cel[9] == '-') {
        alert('Aprovado');
    }
    else [alert ('Use os sinais "()" e "-" adequadatemente, conforme instruído no enunciado')]
}