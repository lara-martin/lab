(function ($) {
    "use strict";


    
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');
        var filter = $(this).attr('data-filter')
        
        if (filter === "*") {
        	var containers = document.getElementsByClassName("portfolio-container");
	   	var i;
	    	for (i = 0; i < containers.length; i++) {
	    	   containers[i].style.display = "block";
	    	   var items = containers[i].getElementsByClassName("portfolio-item");
	    	   var j;
	    	   for (j = 0; j < items.length; j++) {
			items[j].style.display = "block";
		   }
		} 
        }
	else{
        var containers = document.getElementsByClassName("portfolio-container");
   	var i;
    	for (i = 0; i < containers.length; i++) {
    	   containers[i].style.display = "block";
    	   var items = containers[i].getElementsByClassName("portfolio-item");
    	   var j;
    	   var hidden = 0;
    	   for (j = 0; j < items.length; j++) {
		    if (items[j].classList.contains(filter)) {
		      items[j].style.display = "block";
		    } else {
		      items[j].style.display = "none";
		      hidden++;
		    }
	   }
	   if (hidden === j) {
	   	containers[i].style.display = "none";
	   }
	}
	}
    });
    
    
   
    
})(jQuery);

