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
	
	//How It Works Lightbox
	$('#menu li.howitworks a, #methodology a').featherlight({
		iframe: 'howitworks.html',
		iframeWidth: 800,
		iframeHeight: 550
	});
	
	// Share Button  
	$('#menu li.share a').click(function(){
		$('#sharePullDown').toggleClass('shareOpen');
	});
	
	//Row click functionality on data tables
	$('.analyticContainer table tbody tr').click(function(){
		
		//check to see if table clicked is a topic or candidate
		if($(this).parents().eq(3).attr('id') == "topCandidates") {
			pageURL = "profile.html";
		} else if($(this).parents().eq(3).attr('id') == "topTopics"){
			pageURL = "topic.html";
		}
		
		//get data attribute for the row selected
		variableString = $(this).data('string');
		
		//combine variables to create 
		window.location = pageURL + '#' + variableString;	
		
	});
	
});