$(document).ready(function(){
	
	var counter = 0;

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
	var seatNumber = $("p.seat").val();
	$("#reservation").append(seatNumber);
	$(this).css('background', 'grey').fadeTo("fast", 1).text("selected") ;
     counter ++;

	});

    $(".button").click(function(){

    var fname = $("#firstName").val();
  
    var lname = $("#lastName").val();
     


   	$("#reservation").append("Thank You "+ fname+ " " +lname + " You have reserved " + counter + " seats");

    


    });


});
