// JavaScript Document
$( document ).ready(function() {
	
	//prevent jumping on click	
	$( "ul.sizes li a, ul.sleeve li a, .qty a, a.btn" ).click(function() {
		  return false;
	  });
// Collar size btns		    	
	$( "ul.sizes li a" ).each(function( index ) {
	  $(this).attr("data-title","Collar Size");	  	
			$(this).click(function(){
				var thisSize = $(this).text();
				$(this).parents("ul").children("li").children("a").removeClass("active");
				$(this).addClass("active");
				$(".collarSize").html(thisSize);
				
			});
	});
// Sleeve size btns	
$( "ul.sleeve li a" ).each(function( index ) {
	  $(this).attr("data-title","Sleeve Length");
				$(this).click(function(){
				var thisSleeve = $(this).text();	
				$(this).parents("ul").children("li").children("a").removeClass("active");
				$(this).addClass("active");
				$(".sleeveSize").html(thisSleeve);
			});
	});	
	
//Qty minus btn
$(".qty a.minus").click(function(e) {
		var qtyInput = parseInt($("input.qty-input").attr("value"));
		if (qtyInput <= 1 ){
			//do nothing
		}else{
			var qtyInput = parseInt(qtyInput - 1)
			$("input.qty-input").attr("value", qtyInput);
		}
	
});	

//Qty plus btn
$(".qty a.plus").click(function(e) {
		var qtyInput = parseInt($("input.qty-input").attr("value"));
			var qtyInput = parseInt(qtyInput + 1)
			$("input.qty-input").attr("value", qtyInput);	
});	



$("a.btn").click(function(e){
	var collarSize = $("ul.sizes li a.active").html();
	var sleeveSize = $("ul.sleeve li a.active").html();
	var screenHeight = $(window).height(); // New height
  	var screenWidth = $(window).width(); // New width
	
	if ((collarSize === undefined) || (sleeveSize === undefined)){
		$("p.error").removeClass("hide");
	}else{
	$(this).text("Item Added. View Bag").addClass("visited");
	$("p.error").addClass("hide");
	$(".popup").fadeIn(600).delay(3000).fadeOut(600).css("height", screenHeight);
	}	
});

});


