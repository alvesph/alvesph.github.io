$(function olha() {
	
	$('#toggle-sobre').click(function(){
		$('#sobre').slideToggle('slow');
	});

	$('#so').click(function(){
		$('#sobre').slideDown('slow');
	});

});

$(function tentar() {
	$('#sobre').slideUp('fast');
});

$(function exibir() {
	document.getElementById("about").style.display = "none";
	document.getElementById("progresso").style.display = "none";
	document.getElementById("animatexto1").style.display = "none";
	document.getElementById("animatexto2").style.display = "none";
	document.getElementById("animatexto3").style.display = "none";
	document.getElementById("animatexto4").style.display = "none";
});

window.onload = function mostrar(){
	document.getElementById("animatexto1").style.display = "block";

	setInterval(function() {
		document.getElementById("animatexto2").style.display = "block";
	}, 500);
	setInterval(function() {
		document.getElementById("animatexto3").style.display = "block";
	}, 1000);
	setInterval(function() {
		document.getElementById("animatexto4").style.display = "block";
	}, 1500);
	setInterval(function() {
		document.getElementById("progresso").style.display = "block";
	}, 2000);


	setInterval(function() {
		document.getElementById("about").style.display = "block";
	}, 1000);
}


$('.menu a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});

$(function(){   
	var nav = $('.header');   
	$(window).scroll(function () { 
		if ($(this).scrollTop() > 150) { 
			nav.addClass("menu-fixo");
			$('teste').css('padding-top', 50);
		} else { 
			nav.removeClass("menu-fixo"); 
			$('teste').css('padding-top', 0);
		} 
	});  
});