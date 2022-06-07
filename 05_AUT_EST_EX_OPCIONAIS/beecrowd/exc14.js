// Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.

// Entrada
// A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

// Saída
// Apresente a duração do jogo conforme exemplo abaixo.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');
var hI = parseInt(lines.shift())
var hF = parseInt(lines.shift())
var duracao 
if (hF > hI){
    duracao = hF - hI 
    if (duracao >= 1 && duracao <= 24) 
        {console.log('O JOGO DUROU ' + duracao + ' HORA(S)')}
}

else if (hI > hF){
    duracao = (24 - hI) + hF
    if (duracao >= 1 && duracao <= 24) 
        {console.log('O JOGO DUROU ' + duracao + ' HORA(S)')}
}
else if (hI == hF){
    console.log('O JOGO DUROU 24 HORA(S)')
}
