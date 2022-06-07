// Entrada
// O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

// Saída
// O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var c = parseFloat(lines.shift())
var q = parseFloat(lines.shift())
var preco 

if (c == 1){
    preco = parseFloat(4.00) * q
    console.log('Total: R$' + preco.toFixed(2));
}
else if (c == 2){
    preco = parseFloat(4.50) * q
    console.log('Total: R$' + preco.toFixed(2));
}
else if (c == 3){
    preco = parseFloat(5.00) * q 
    console.log('Total: R$' + preco.toFixed(2));
}
else if (c == 4){
    preco = parseFloat(2.00) * q 
    console.log('Total: R$' + preco.toFixed(2));
}
else if (c == 5) {
    preco = parseFloat(1.50) * q
    console.log('Total: R$' + preco.toFixed(2));
}