function GetVal(){
    var valI 
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

    valI = document.getElementById("valI").value;
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

    document.getElementById("n100").value = n100;
    document.getElementById("n50").value = n50;
    document.getElementById("n20").value = n20;
    document.getElementById("n10").value = n10;
    document.getElementById("n5").value = n5;
    document.getElementById("n2").value = n2;
    document.getElementById("n1").value = n1; 
}