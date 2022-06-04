var quant0
var quantF

function somar() {
    quant0 = document.getElementById('quant0').value 
    quantF = Number(quant0) + 1 
    document.getElementById('quant0').value = quantF
}

function subtrair() {
    quant0 = document.getElementById('quant0').value 
    quantF = Number(quant0) - 1 
    document.getElementById('quant0').value = quantF
}