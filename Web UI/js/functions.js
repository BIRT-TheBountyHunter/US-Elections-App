$(document).ready(function() {
	
	// Idle timer to close all filter panels if inactivity detected for 15 seconds
    $.idleTimer(15000);
    $(document).bind("idle.idleTimer", function() {
	    $('.filterPane').removeClass('filterPaneOpen');
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
	
	//Click header to return home
	$('.headerWrapper img, .headerWrapper h4').click(function(){
		window.location = "index.html";
	});
	
	//Scroll down to add heading
	function testScroll(ev){
	    if(window.pageYOffset>100){
	    	$('body.home #menuHeader').addClass('scrollDown');
	    }else{
	    	$('body.home #menuHeader').removeClass('scrollDown');
	    }
	}
	window.onscroll=testScroll;
	
	//Profile / Topic Menu
	$('body.profile h1').click(function(){
		$('#profileTopicMenu').addClass('displayed');
	});
	
	$('.overlayCloseButton').click(function(){
		$('#profileTopicMenu').removeClass('displayed');
	});
	
	// SHARE MENU //
	
		//Share Menu click function
		$('a.share').click(function(){
			$('#menu li:nth-child(2)').toggleClass('liWidth');
			$(this).toggleClass('shareHidden');
			setTimeout(function(){
			  $('a.shareIcon').addClass('showIcons');
			}, 50);
		});
		
		//Share Menu Mouse leave functions for share menu
		var timer;
		$('#menu li:nth-child(2)').on('mouseover', function() {
			//clear time on mouse re-enter/over
			clearTimeout(timer);
		}).on('mouseleave', function() {
			//delays closing of share menu so that it doesn't appear glitch if mouse leaves the element for a moment
			timer = setTimeout(function(){
		    	$('#menu li:nth-child(2)').removeClass('liWidth');
				$('a.share').removeClass('shareHidden');
				$('a.shareIcon').removeClass('showIcons');
		  }, 1000);
		});
		
		
		//Handle click events for each social icon
		
		//TWITTER
		$('a.twitter').click(function() {
			
			//Base URL to Twitter Intent
			baseURL = "https://twitter.com/intent/tweet?";
			
			//Tweet text
			tweetText = "Data analysis of US election media coverage";
			
			//URL to current page
			currentURL = window.location.href;

			//Hashtags
			hashtag = "ElectionMediaAnalysis";
			
			window.location.href = baseURL + "url=" + currentURL + "&text=" + tweetText + "&hashtags=" + hashtag + "&source=webclient";
		});
		
		//FACEBOOK
		$('a.facebook').click(function() {
			
			//Base URL to Twitter Intent
			baseURL = "https://www.facebook.com/sharer/sharer.php?";

			//URL to current page
			currentURL = window.location.href;

			window.location.href = baseURL + "u=" + currentURL;
		});
		
		//Google+
		$('a.google').click(function() {
			
			//Base URL to Twitter Intent
			baseURL = "https://plus.google.com/share?";
			
			//URL to current page
			currentURL = window.location.href;
			currentURLEnc = encodeURI(currentURL);
			
			window.location.href = baseURL + "url=" + currentURLEnc;
		});
		
		//LinkedIn
		$('a.linkedin').click(function() {
			
			//Base URL to Twitter Intent
			baseURL = "https://www.linkedin.com/shareArticle?mini=true";
			
			//Title
			titleText = "Data analysis of US election media coverage";
			
			//URL to current page
			currentURL = window.location.href;
			
			window.location.href = baseURL + "&url=" + currentURL + "&title=" + titleText;
			
		});
		
		//Email
		$('a.email').click(function() {
			
			//Base URL to Twitter Intent
			baseURL = "mailto:?";
			
			//Subject
			subjectText = "Data analysis of US election media coverage";
			subjectTextEnc = encodeURI(subjectText);
			
			//URL to current page
			currentURL = window.location.href;
			currentURLEnc = encodeURI(currentURL);
			
			//Body
			bodyText = "Check out this media analysis of the 2016 Presidental Election media coverage here: " + currentURLEnc;
			bodyTextEnc = encodeURI(bodyText);
			
			window.location.href = baseURL + "subject=" + subjectTextEnc + "&body=" + bodyTextEnc;
			
		});
		
});
	