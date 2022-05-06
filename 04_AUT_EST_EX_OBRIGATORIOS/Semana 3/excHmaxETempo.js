function GetVel()
{
    var hmax 
    var v0
    var tempo 
    const gravidade = 10

    velI = document.getElementById("velI").value
    tempo = velI/gravidade
    hmax = (velI * velI)/(2*gravidade)
    alert("O tempo de subida é de " + tempo + " segundo(s) e a altura máxima é de " + hmax + " metro(s)!");
}