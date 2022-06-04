$(function() {
    $("#inserir").click( () => {
      let quantidade  = $("#quantAlunos").val();
  
      if (quantidade) {
        quantidade = parseInt(quantidade);

        for (let i=1; i <= quantidade; i++) {

                $("body").append(`<input id="nome${i}" type="text" placeholder="Nome ${i}">`);
                $("body").append(`<input id="notaP${i}" type="number" placeholder="Nota Prova ${i}" >` );
                $("body").append(`<input id="notaT${i}" type="number" placeholder="Nota Trabalho ${i}" >`);
                $("body").append(`<input id="mediares${i}" type="submit" placeholder="Média resultado ${i}" >`);
                $("body").append('<br>');}

      }
    });
  });
  function media(){
    let quantidade  = $("#quantAlunos").val();
    for (let i=1; i <= quantidade; i++) {
        var notaP = document.getElementById("notaP${i}");
        var notaT = document.getElementById("notaT${i}");
        var media = ((2 * notaP) + (3 * notaT)) / 5;
        console.log(2);}
        document.getElementById('mediares${1}').innerHTML = media()}
