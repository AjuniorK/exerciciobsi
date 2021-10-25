var carrinho = [];

window.onload = function(){
    pegarQtdProdutos();
    montarCarrinho();
    calcularTotal();
}

function pegarQtdProdutos(){

	document.getElementById("qtdCarrinho").innerHTML = "";
	
    json = window.localStorage.getItem("carrinho");
    produtos = JSON.parse(json);
    console.log(produtos.length);
        

    conteudo = ''+  produtos.length + '';

        
    document.getElementById("qtdCarrinho").innerHTML += conteudo;
    
}

function montarCarrinho(){

    document.getElementById("carrinhoBody").innerHTML = "";

    json = window.localStorage.getItem("carrinho");
    listaProdutos = JSON.parse(json);

    for(var i = 0; i < listaProdutos.length; i++)
    {
        var conteudo = "";
        conteudo += '<tr>';
        conteudo += '<td class="thumbnail-img">';
        conteudo += '<a href="#">';
        conteudo += '<img class="img-fluid" src="images/' + listaProdutos[i][2] + '" alt="" />';
        conteudo += '</a>';
        conteudo += '</td>';
        conteudo += '<td class="name-pr">';
        conteudo += '<a href="#">' + listaProdutos[i][3]  + '</a>  </td>';
        conteudo += '<td class="price-pr">';
        conteudo += '<p>'+ listaProdutos[i][4] + '</p> </td>';
        conteudo += '<td class="total-pr">';
        conteudo += '<p>'+ listaProdutos[i][1] + '</p> </td>';
        conteudo += '<td class="remove-pr"> <a href="#" onclick="remover(' + listaProdutos[i][0] + ')"> <i class="fas fa-times"></i> </a>  </td>';
        conteudo += '</td>';
        conteudo += '</tr>';

        document.getElementById("carrinhoBody").innerHTML += conteudo;
    }
}

function remover(ID){

    json = window.localStorage.getItem("carrinho");
    listaProdutos = JSON.parse(json);


    index = listaProdutos.map(function(item) {
        return item[0]
    }).indexOf(ID);
    listaProdutos.splice(index, 1);
    
    window.localStorage.clear();
    window.localStorage.setItem("carrinho", JSON.stringify(listaProdutos));

    pegarQtdProdutos();
    montarCarrinho();
    calcularTotal();

}

function calcularTotal(){

document.getElementById("total").innerHTML = "";

json = window.localStorage.getItem("carrinho");
listaProdutos = JSON.parse(json);

//R$ 7.35
//.substring(6);
//parseFloat("10.00")

var valor = 0;
var conteudo = "";
for(var i = 0; i < listaProdutos.length; i++)
{
    valor += parseFloat(listaProdutos[i][4].substring(3))
}
valor = valor.toFixed(2)
conteudo += 'R$ ' + valor;
document.getElementById("total").innerHTML += conteudo;
}
                    