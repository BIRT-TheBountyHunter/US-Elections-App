$(document).ready(function() {
	
	// Idle timer to close all filter panels if inactivity detected for 15 seconds
    $.idleTimer(15000);
    $(document).bind("idle.idleTimer", function() {
	    $('.filterPane').removeClass('filterPaneOpen');
	    $('#sharePullDown').removeClass('shareOpen');
    });
	
	// Filter Button 
	$('.filterButton').click(function(){
		$(this).find('.filterIcon').toggleClass('open');
		$(this).closest('div').find('.filterPane').toggleClass('filterPaneOpen');
	});
	
	//click anywhere to close share
/*
	$(document).mouseup(function (e) {
		
		var container = $('#sharePullDown');
	
	    if (!container.is(e.target) // if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
	         $('#sharePullDown').removeClass('shareOpen');
	    }
	});
*/
	
	// Share Button  
	$('#menu li.share a').click(function(){
		$('#sharePullDown').toggleClass('shareOpen');
	});
	
	// Cache selectors outside callback for performance. 
   var $window = $(window),
       $stickyEl = $('#sharePullDown'),
       elTop = $stickyEl.offset().top;

   $window.scroll(function() {
        $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
    });
	
});