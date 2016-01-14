$(document).ready(function() {
	
	// Idle timer to close all filter panels if inactivity detected for 15 seconds
    $.idleTimer(15000);
    $(document).bind("idle.idleTimer", function() {
	    $('.filterPane').removeClass('filterPaneOpen');
	    $('#sharePullDown').removeClass('shareOpen');
	    $(this).find('span.textLabel').removeClass('hideText');
    });
	
	// Filter Button 
	$('.filterButton').click(function(){
		$(this).find('.filterIcon').toggleClass('open');
		$(this).find('span.textLabel').toggleClass('hideText');
		$(this).closest('div').find('.filterPane').toggleClass('filterPaneOpen');
	});
	
	//how it works lightbox
	$('#menu li.howitworks a, #methodology a').featherlight({
		iframe: 'howitworks.html',
		iframeWidth: 800,
		iframeHeight: 550
	});
	
	// Share Button  
	$('#menu li.share a').click(function(){
		$('#sharePullDown').toggleClass('shareOpen');
	});
	
	// Table Row Highlight Button  
	$('.tableRowButton').hover(function(){
		$(this).closest('td, tr').css('background-position', 'center bottom');
		}, function() {
			$(this).closest('td, tr').css('background-position', 'center top');	
	});
	
// Cache selectors outside callback for performance. 
   var $window = $(window),
       $stickyEl = $('#sharePullDown'),
       elTop = $stickyEl.offset().top;

   $window.scroll(function() {
        $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
    });
	
});