$(document).ready(function(){
	
	
	
  $('#menu li').click(function(){
    $('#menu li').removeClass("active");
    $(this).addClass("active");
});






$('.continue_r').click(function(){
	alert('working on it..');
	
});


//menu show hide



  $(' .mobilemenu').click(function(){
	  // $('#header nav').toggleClass('show_menu');
	$('#header nav').toggle(100);
  });













});