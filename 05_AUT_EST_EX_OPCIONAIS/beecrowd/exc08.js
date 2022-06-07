// Você deve fazer um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual dos seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) este valor se encontra. Obviamente se o valor não estiver em nenhum destes intervalos, deverá ser impressa a mensagem “Fora de intervalo”.

// O símbolo ( representa "maior que". Por exemplo:
// [0,25]  indica valores entre 0 e 25.0000, inclusive eles.
// (25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000

// Entrada
// O arquivo de entrada contém um número com ponto flutuante qualquer.
var input = require('fs').readFileSync('stdin', 'utf8');
var X = parseFloat(input);

if(X > 0 && (X <= 25))
{console.log("Intervalo [0,25]");}
else if(X > 25 && X <= 50)
{console.log("Intervalo (25,50]");}
else if(X > 50 && X <= 75)
{console.log("Intervalo (50,75]");}
else if(X > 75 && X <= 100)
{console.log("Intervalo (75,100]");}
else {console.log("Fora de intervalo");}

// const input = require('fs').readFileSync('/dev/stdin', 'utf8')
// const valor = parseFloat(input)

// if (valor >= 0.0 && valor <= 25.00){    console.log("Intervalo [0,25]")}
// else if( valor >= 25.01 && valor <= 50.00 ){    console.log("Intervalo (25,50]")}
// else if(valor >= 50.01 && valor <= 75.00){    console.log("Intervalo (50,75]")}
// else if(valor >= 75.01 && valor <= 100.00){    console.log("Intervalo (75,100]")}
// else{console.log("Fora de intervalo")}