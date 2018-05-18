$(document).ready(function(){
	// Inicializar ScrollMagic
	var controller = new ScrollMagic.Controller();

	// Contruir a Cena
	var scene = new ScrollMagic.Scene({
		triggerElement: '.down-up-anime'
	})
	.setClassToggle('.down-up-anime', 'down-up-anime-show') // adicionar classe para o projeto
	.addTo(controller);


	// Contruir a Cena
	var scene = new ScrollMagic.Scene({
		triggerElement: '.down-up-anime-slow'
	})
	.setClassToggle('.down-up-anime-slow', 'down-up-anime-slow-show') // adicionar classe para o projeto
	.addTo(controller);


		// Contruir a Cena
	var scene = new ScrollMagic.Scene({
		triggerElement: '.up-down-anime'
	})
	.setClassToggle('.up-down-anime', 'up-down-anime-show') // adicionar classe para o projeto
	.addTo(controller);


	// Contruir a Cena
	var scene = new ScrollMagic.Scene({
		triggerElement: 'up-down-anime-slow'
	})
	.setClassToggle('.up-down-anime-slow', 'up-down-anime-slow-show') // adicionar classe para o projeto
	.addTo(controller);



	// Contruir a Cena
	var scene = new ScrollMagic.Scene({
		triggerElement: '.right-left-anime'
	})
	.setClassToggle('.right-left-anime', 'right-left-anime-show') // adicionar classe para o projeto
	.addTo(controller);


	// Contruir a Cena
	var scene = new ScrollMagic.Scene({
		triggerElement: '.left-right-width-anime'
	})
	.setClassToggle('.left-right-width-anime', 'left-right-width-anime-show') // adicionar classe para o projeto
	.addTo(controller);


					// Contruir a Cena
	var scene = new ScrollMagic.Scene({
		triggerElement: '.fade-in-anime'
	})
	.setClassToggle('.fade-in-anime', 'fade-in-anime-show') // adicionar classe para o projeto
	.addTo(controller);


});