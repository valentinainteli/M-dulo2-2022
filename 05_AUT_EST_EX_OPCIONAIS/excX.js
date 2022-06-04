function Intervalo(x){
    var a = 0; 
    var b = 25;
    var c = 50; 
    var d = 75;
    var e = 100;
    if(a < x < b)
    {console.log("Intervalo [" + a + "," + b + "]");}
    else if(b < x < c)
        {console.log("Intervalo [" + b + "," + c + "]");}
    else if(c < x < d)
        {console.log("Intervalo [" + c + "," + d + "]");}
    else if(d < x < e)
        {console.log("Intervalo [" + d + "," + e + "]");}
    else{console.log("Fora do Intervalo");}
}