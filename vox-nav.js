var $body = $('body'),
		previousDiv = '<div class="nav-previous nav-click"></div>',
		nextDiv = '<div class="nav-next nav-click"></div>',
		cardLength = $('#card-list li').length;

$body.append(previousDiv);
$body.append(nextDiv);


$(document.body).on('click', '.nav-previous' ,function(){
	if ( $('.current').index() > 0 ) {

		$('.current').addClass('to-right');
		$('.current').prev().addClass('current from-left');


		$('.to-right').removeClass('to-right current');
		$('.from-left').removeClass('from-left');
	}
});

$(document.body).on('click', '.nav-next' ,function(){
	if ( $('.current').index() < cardLength-1 ) {
		$('.current').addClass('to-left');
		$('.current').next().addClass('current from-right');


		$('.to-left').removeClass('to-left current');
		$('.from-right').removeClass('from-right');
	}
});


var element = document.getElementById('card-list');
var dragLeft = Hammer(element).on("dragleft", function(event) {
	if ( $('.current').index() > 0 ) {
		$('.current').addClass('to-right');
		$('.current').prev().addClass('current from-left');


		$('.to-right').removeClass('to-right current');
		$('.from-left').removeClass('from-left');
	}
});

var dragRight = Hammer(element).on("dragright", function(event) {
	if ( $('.current').index() < cardLength-1 ) {
		$('.current').addClass('to-left');
		$('.current').next().addClass('current from-right');


		$('.to-left').removeClass('to-left current');
		$('.from-right').removeClass('from-right');
	}
});