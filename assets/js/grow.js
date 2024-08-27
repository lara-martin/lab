
function blink(notification) {
	$(notification).css({"opacity":"100"});
	setTimeout(() => {$(notification).css({"opacity":"0"});}, 2000);
	
}

$(".collapsible").on('click', function(e){    

    var notification = $(this).next("div");
    if ($(notification).hasClass("copied")){
	    $(notification).addClass("ease");
	    var target = $(notification).next("div"); //$(notificiation).nextSibling;
	    if ($(target).hasClass("highlight")){

	      if ($(target).height() > 0) {
		$(target).css({"height":"0"});        
		setTimeout(() => { $(target).css({"visibility":"hidden"}); }, 400);
		
	      } else {
	      //$(notification).css({"visibility":"visible"});
	      blink(notification);
	      	var wrapper = $(target).children();
	      	navigator.clipboard.writeText($(wrapper)[0].textContent);
		$(target).css({"visibility":"visible"});
		$(target).css({"height":$(wrapper).height()+15});
	      }
	    }
		
	    //setTimeout(() => {$(notification).css({"opacity":"0"});}, 2000);
	}
});


$(document).ready(function() {

    $(".expand-link").click(function() {
        $(".expand-content").slideToggle('slow');
    });
});
	
