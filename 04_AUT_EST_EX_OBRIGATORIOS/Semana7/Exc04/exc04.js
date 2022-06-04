function calculo() {
    var quant = document.getElementById('quant').value;
    var totalCompra;

        if (document.getElementById('dia').checked)
        {
            if (quant > 50){totalCompra = Number(quant) * (0.6 * 200);}
            else {totalCompra = Number(quant) * 200;}
            document.getElementById('resultado').innerHTML = totalCompra;
        } 
        
        if (document.getElementById('noite').checked)
        {
            if (quant > 50){totalCompra = Number(quant) * (0.8 * 100)}
            else {totalCompra = Number(quant) * 100;}
            document.getElementById('resultado').innerHTML = totalCompra;
        }
}