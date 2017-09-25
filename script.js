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

   $("p").on("click",function(){
   $("p").css("background-color","red")
   	
   });
 $("h2").hover(function(){
 	
 	$("h2").css("font-size","2em")
 	$("h2").css("background-color","lightblue")
 });
 
 //$("button").hover(function(){
 	
 //$("button").css("background-color","black")	
 	
 //$("this").mouseleave("background-color","grey")	
 	
 	
 	
 //});

$("body").mouseenter(function(){
	
$("body").css("background-color","black")	
	
$("body").mouseleave(function(){
	
	$("this").css("background-color","grey")
});	
	
$("#bottom_button1"). on("click",function(){
	
// $("#bottom_button1").hide();	
// $("this").show();
	
 $("#card_para1").slideToggle(1000);
 //$("bottom_button1").fadeIn(1000,0.5);
	
});	
	
});
}); 
