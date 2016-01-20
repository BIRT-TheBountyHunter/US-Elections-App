$(document).ready(function() {
    actuate.load("viewer");

    var iHub = "/iportal";
	var reqOps = new actuate.RequestOptions();
	var viewer;
	
	var rptDocuments = ["/elections/Candidate Stats.rptdocument",
						"/elections/Candidate Breakdown.rptdocument"];
	var bookmarks = ["candidateStats", "TopicBreakdown"];
	var heights = [300, 350]
	var widths = [775, 980];
	
	actuate.initialize( iHub, reqOps, "administrator", null, myInit);
	
	function myInit()  {
        try {
            var config = new actuate.viewer.UIConfig();
                config.setContentPanel(new actuate.viewer.BrowserPanel());

            var uiOptions = new actuate.viewer.UIOptions();
                uiOptions.enableToolBar(false);

            viewer = [new actuate.Viewer("candidateStats"),
					  new actuate.Viewer("MediaBreakdown")];
			
			for(var i=0;i<viewer.length;i++) {
                viewer[i].setReportDocument(rptDocuments[i]);
                viewer[i].setReportletBookmark(bookmarks[i]);
                viewer[i].setUIOptions(uiOptions);
				viewer[i].setHeight(heights[i]);
                viewer[i].setWidth(widths[i]);
                viewer[i].submit();
            }
        }catch(err){
            console.log(err);
        }			
	}
});