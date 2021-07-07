$(document).ready(function() {
    
    //alert('here');
	
  $('.tabs a').click(function(){
  
     $('.panel').hide();
     $('.tabs a.active').removeClass('active');
     $(this).addClass('active');
     
     var panel = $(this).attr('href');
     $(panel).fadeIn(1000);
     
     return false;  // prevents link action
    
  });  // end click 

     $('.tabs li:first a').click();
     
}); // end ready