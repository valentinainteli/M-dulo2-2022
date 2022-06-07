// A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:

// Salário	Percentual de Reajuste
// 0 - 400.00
// 400.01 - 800.00
// 800.01 - 1200.00
// 1200.01 - 2000.00
// Acima de 2000.00

// 15%
// 12%
// 10%
// 7%
// 4%

// Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

// Entrada
// A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

// Saída
// Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste e o percentual de reajuste ganho, conforme exemplo abaixo.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');
var salarioI = parseFloat(lines.shift())
var salarioF
var reajuste 

if (salarioI > 0.00 && salarioI <= 400.00){
    salarioF = salarioI * 1.15
    reajuste = salarioF - salarioI
    console.log('Novo salario: ' + salarioF.toFixed(2) + '\n' + 'Reajuste ganho: ' + reajuste.toFixed(2) + '\n' + 'Em percentual: 15 %');
    	
}
else if (salarioI >= 400.01 && salarioI <= 800.00){
    salarioF = salarioI * 1.12
    reajuste = salarioF - salarioI
    console.log('Novo salario: ' + salarioF.toFixed(2) + '\n' + 'Reajuste ganho: ' + reajuste.toFixed(2) + '\n' + 'Em percentual: 12 %');
    	
}
else if (salarioI >= 800.01 && salarioI <= 1200.00){
    salarioF = salarioI * 1.10
    reajuste = salarioF - salarioI
    console.log('Novo salario: ' + salarioF.toFixed(2) + '\n' + 'Reajuste ganho: ' + reajuste.toFixed(2) + '\n' + 'Em percentual: 10 %');
    	
}
else if (salarioI >= 1200.01 && salarioI <= 2000.00){
    salarioF = salarioI * 1.07
    reajuste = salarioF - salarioI
    console.log('Novo salario: ' + salarioF.toFixed(2) + '\n' + 'Reajuste ganho: ' + reajuste.toFixed(2) + '\n' + 'Em percentual: 7 %');
    	
}
else if (salarioI > 2000){
    salarioF = salarioI * 1.04
    reajuste = salarioF - salarioI
    console.log('Novo salario: ' + salarioF.toFixed(2) + '\n' + 'Reajuste ganho: ' + reajuste.toFixed(2) + '\n' + 'Em percentual: 4 %');
    	
}
