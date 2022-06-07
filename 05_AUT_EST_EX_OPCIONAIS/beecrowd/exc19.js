// Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no sistema cartesiano. Para cada ponto escrever o quadrante a que ele pertence. O algoritmo será encerrado quando pelo menos uma de duas coordenadas for NULA (nesta situação sem escrever mensagem alguma).

// Entrada
// A entrada contém vários casos de teste. Cada caso de teste contém 2 valores inteiros.

// Saída
// Para cada caso de teste mostre em qual quadrante do sistema cartesiano se encontra a coordenada lida, conforme o exemplo.

var input = require('fs').readFileSync('stdin', 'utf8');
var array = input.split('\n')
for (i=0; i < array.length; i++){
    teste = array[i].split(' ') 
    corX = teste.shift();
    corY = teste.shift();

    if (corX > 0 & corY > 0){
        console.log('primeiro');
    }
    else if(corY > 0 & corX < 0){
        console.log('segundo');
    }
    else if(corX > 0 & corY < 0){
        console.log('quarto');
    }
    else if(corX < 0 & corY < 0){
        console.log('terceiro');
    }
    else if(corY == 0 || corX == 0){
        console.log('\n');
    }
}


