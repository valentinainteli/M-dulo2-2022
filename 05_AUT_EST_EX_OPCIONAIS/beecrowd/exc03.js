function lanche(c,q){
    var preco
    if (c == 1){
        preco = Number(4) * q 
        console.log("Total: " + preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
    }
    else if (c == 2){
        preco = Number(4.5) * q 
        console.log("Total: " + preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
    }
    else if (c == 3){
        preco = Number(5) * q 
        console.log("Total: " + preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
    }
    else if (c == 4) {
        preco = Number(2) * q 
        console.log("Total: " + preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
    }
    else if (c == 5){
        preco = Number(1.5) * q 
        console.log("Total: " + preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
    }
    else{console.log("Produto inexistente")}
}

function media(n1,n2,n3,n4){
    media = (parseFloat(n1)*2 + parseFloat(n2)*3 + parseFloat(n3)*4 + parseFloat(n4)*1) /10;
    console.log('Média:' + media);
    if (media == 7 || media > 7){
        console.log('Aluno Aprovado')
    }
    else if(media < 5){
        console.log('Aluno Reprovado')
    }
    else if(media == 5 || media > 5 || media == 6.9 || media < 6.9){
        console.log('Aluno em exame')
    }
}