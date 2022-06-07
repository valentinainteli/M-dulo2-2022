    var input = require('fs').readFileSync('stdin', 'utf8');
    var valI = parseInt(input)
    var n100
    var r100
    var n50
    var r50
    var n20
    var r20
    var n10
    var r10
    var n5
    var r5
    var n2
    var n1

    if (valI > 0 && valI < 1000000) {
    n100 = parseInt(valI/100);
    r100 = parseInt(valI%100);
    n50 = parseInt(r100/50);
    r50 = parseInt(r100%50);
    n20 = parseInt(r50/20);
    r20 = parseInt(r50%20);
    n10 = parseInt(r20/10);
    r10 = parseInt(r20%10);
    n5 = parseInt(r10/5);
    r5 = parseInt(r10%5);
    n2 = parseInt(r5/2);
    r2 = parseInt(r5%2);
    n1 = parseInt(r2/1);


    console.log(valI + '\n' + n100 + ' nota(s) de R$ 100,00' + '\n' + n50 + ' nota(s) de R$ 50,00' + '\n' + n20 + ' nota(s) de R$ 20,00' + '\n' + n10 + ' nota(s) de R$ 10,00' + '\n' + n5 + ' nota(s) de R$ 5,00' + '\n' + n2 + ' nota(s) de R$ 2,00' + '\n' + n1 + ' nota(s) de R$ 1,00');
}