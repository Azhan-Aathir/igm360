$(document).on('click','.navbar-collapse',function(e) {
 
    if( $(e.target).is('a') && ( $(e.target).attr('class') != 'dropdown-toggle' ) ) {
        $(this).collapse('hide');
        //alert("hello");      
    }

});


$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $("#navdiv").css("background-color" ,"#ffdb2b");
	        }
        else
            {
                $("#navdiv").css("background-color" ,"rgb(255,255,255,0.4)");
            }
	  
  });
});
//iframe


