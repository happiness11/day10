$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


// $("button").on("click", function(){
// $("button").addClass("makeRed");
	
	
// });

// $("button").on("click", function(){
// 	$("this").addBorder("makeBorder");

// });

// $("button").on("mouseenter",function(){
// 	$("this").removeClass("makeRed").addClass("makeRed");
	
// });


// $("button").on("mouseleave",function(){	
	
// 	$("this").removeClass("makeRed").addClass("makeRed");	
	
// });

// $("#button1").on("click",function(){

// 	$("#para1").slideToggle();

// });

// $("#button2").on("click", function(){
	
// $("#para2").slideUp();	
// });

$("#cards_stream1").on("click",function() {
    $("#cards_stream1").css("background-color","blue");
});
	
	
// $("#stream1_btn").on("click", function(){
// $(".stream1").addClass("highlight_stream");	
// $(".stream2").removeClass("highlight_stream");	
// $(".stream3").removeClass("highlight_stream");	
// });

$("p").on("click",function() {
	
    if($(this).children("a").css("background-color") =="yellow"){

	$(this).children("a").css("background-color","white");

    	
    	
    } else {
    	$(this).children("a").css("background-color","yellow");
    }
    
});

});

