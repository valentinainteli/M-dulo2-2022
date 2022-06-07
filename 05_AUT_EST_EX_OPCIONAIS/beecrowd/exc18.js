// Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.



// Entrada
// A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

// Saída
// Imprima o nome do animal correspondente à entrada fornecida.

var input = require('fs').readFileSync('stdin', 'utf8');
var array = input.split('\n');
var name1 = array.shift();
var name2 = array.shift();
var name3 = array.shift();

if (name1 === 'vertebrado'){
        if (name2 === 'ave'){
            if (name3 === 'carnivoro') {
                console.log('aguia')
            }
            else if (name3 === 'onivoro'){
                console.log('pomba')
            }
        }
        else if (name2 === 'mamifero'){
            if (name3 === 'onivoro'){
                console.log('homem')
            }
            else if (name3 === 'herbivoro'){
                console.log('vaca')
            }
        }
    }
else if (name1 === 'invertebrado'){
        if (name2 === 'inseto'){
            if (name3 === 'hematofago') {
                console.log('pulga')
            }
            else if (name3 === 'herbivoro'){
                console.log('lagarta')
            }
        }
        else if (name2 === 'anelideo'){
            if (name3 === 'hematofago'){
                console.log('sanguessuga')
            }
            else if (name3 === 'onivoro'){
                console.log('minhoca')
            }
        }
    }