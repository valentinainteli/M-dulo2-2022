var num1
var num2
var resultado

function somar() {
    num1 = document.getElementById("num1").value
    num2 = document.getElementById("num2").value
    resultado = Number(num1) + Number(num2) 
    // alert ("A soma desses dois números é " + resultado)
    document.getElementById("resultado").value = resultado
}

function subtrair() {
    num1 = document.getElementById("num1").value
    num2 = document.getElementById("num2").value
    resultado = Number(num1) - Number(num2)
    document.getElementById("resultado").value = resultado
}

function multiplicar() {
    num1 = document.getElementById("num1").value
    num2 = document.getElementById("num2").value
    resultado = Number(num1) * Number(num2)
    document.getElementById("resultado").value = resultado
}

function dividir() {
    num1 = document.getElementById("num1").value
    num2 = document.getElementById("num2").value
    resultado = Number(num1) / Number(num2)
    document.getElementById("resultado").value = resultado
}
function dividirInt() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    resultado = num1 / num2
    document.getElementById("resultado").value = parseInt(resultado)
}

function dividirResto() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    resultado = num1 % num2
    document.getElementById("resultado").value = resultado
}
