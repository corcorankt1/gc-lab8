
$(document).ready(function(){
	
	$( "#thanks" ).dialog({ autoOpen: false });
	$( "#submit-button" ).click(function() {
	$( "#thanks" ).dialog( "open" );
	});

	$( "div.seats" ).mouseenter(function() {
  	$( this ).fadeTo("fast", .10) 
	});

	$("div.seats").mouseout(function() {
  	$( this ).fadeTo("fast", 1) 
  	});

	$("div.seats").click(function () {
	$(this).css('background', 'grey').fadeTo("fast", 1).text("selected") ;
	});

});
