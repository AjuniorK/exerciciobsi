var carrinho = [];

window.onload = function(){
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

(function($) {
    "use strict";
	
	/* ..............................................
	   Fixed Menu
	   ................................................. */

	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 50) {
			$('.main-header').addClass('fixed-menu');
		} else {
			$('.main-header').removeClass('fixed-menu');
		}
	});

	/* ..............................................
	   Gallery
	   ................................................. */

	$('#slides-shop').superslides({
		inherit_width_from: '.cover-slides',
		inherit_height_from: '.cover-slides',
		play: 5000,
		animation: 'fade',
	});

	$(".cover-slides ul li").append("<div class='overlay-background'></div>");
	
}(jQuery));
