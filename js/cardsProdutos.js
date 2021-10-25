var listaProdutos = [[0, '124cm x 124cm', 'produto1.jpg', 'Caixa de Exemplo 1', 'R$ 5.35', false], 
                    [1, '114cm x 104cm', 'produto2.jpg', 'Caixa de Exemplo 2', 'R$ 4.35', false],
                    [2, '74cm x 14cm', 'produto3.jpg', 'Caixa de Exemplo 3', 'R$ 14.35', false],
                    [3, '54cm x 44cm', 'produto4.jpg', 'Caixa de Exemplo 4', 'R$ 9.35', false],
                    [4, '84cm x 64cm', 'produto5.jpg', 'Caixa de Exemplo 5', 'R$ 13.35', false],
                    [5, '84cm x 34cm', 'produto6.jpg', 'Caixa de Exemplo 6', 'R$ 7.35', false],
                    [7, '164cm x 14cm', 'produto7.jpg', 'Caixa de Exemplo 7', 'R$ 45.35', false],
                    [8, '74cm x 64cm', 'produto8.jpg', 'Caixa de Exemplo 8', 'R$ 15.35', false],
                    [9, '104cm x 104cm', 'produto9.jpg', 'Caixa de Exemplo 9', 'R$ 23.35', false]];

var carrinho = [];

window.onload = function(){
    montarCardProdutos();
    pegarQtdProdutos();
}

function montarCardProdutos(){

    document.getElementById("divProdutos").innerHTML = "";


    for(var i = 0; i < listaProdutos.length; i++)
    {
        var conteudo = "";
        conteudo += '<div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">';
        conteudo += '<div class="products-single fix">';
        conteudo += '<div class="box-img-hover">';
        conteudo += '<div class="type-lb">';
        conteudo += '<p class="sale">' + listaProdutos[i][1] + '</p>';
        conteudo += '</div>';
        conteudo += '<img src="images/' + listaProdutos[i][2] + '" class="img-fluid" alt="Image">';
        conteudo += '</div>';
        conteudo += '<div class="why-text">';
        conteudo += '<h4>' + listaProdutos[i][3] + '</h4>';
        conteudo += '<h5>' + listaProdutos[i][4] + '</h5>';


        if(listaProdutos[i][5] == false)
        {
            conteudo += '<a class="cart" href="#" onclick="comprar(' + listaProdutos[i][0] + ')"  >';
            conteudo += 'Comprar';
            conteudo += '</a>';
            conteudo += '</div>';
            conteudo += '</div>';
        }
        else
        {
            conteudo += '<a class="cart" href="#">';
            conteudo += 'Comprado';
            conteudo += '</div>';
            conteudo += '</div>';

        }
        


        conteudo += '</div>';
        
        document.getElementById("divProdutos").innerHTML += conteudo;
    }
}

function comprar(id){

    listaProdutos[id][5] = true;
    
    carrinho.push(listaProdutos[id]);

    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));

    montarCardProdutos();
    pegarQtdProdutos();

}

function pegarQtdProdutos(){

	document.getElementById("qtdCarrinho").innerHTML = "";
	
    json = window.localStorage.getItem("carrinho");
    produtos = JSON.parse(json);
    console.log(produtos.length);

    conteudo = ''+  produtos.length + '';

        
    document.getElementById("qtdCarrinho").innerHTML += conteudo;
    
}