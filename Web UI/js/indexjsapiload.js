$(document).ready(function() {
    actuate.load("viewer");

    var iHub = "/iportal";
	var reqOps = new actuate.RequestOptions();
	var viewer;
	
	var rptDocuments = ["/elections/Key Stats.rptdocument",
						"/elections/Media Breakdown.rptdocument"];
	var bookmarks = ["keyStats", "MediaBreakdown"];
	var heights = [200, 250]
	
	actuate.initialize( iHub, reqOps, "administrator", null, myInit);
	
	function myInit()  {
        try {
            var config = new actuate.viewer.UIConfig();
                config.setContentPanel(new actuate.viewer.BrowserPanel());

            var uiOptions = new actuate.viewer.UIOptions();
                uiOptions.enableToolBar(false);

            viewer = [new actuate.Viewer("keyStats"),
					  new actuate.Viewer("MediaBreakdown")];
			
			for(var i=0;i<viewer.length;i++) {
                viewer[i].setReportDocument(rptDocuments[i]);
                viewer[i].setReportletBookmark(bookmarks[i]);
                viewer[i].setUIOptions(uiOptions);
				viewer[i].setHeight(heights[i]);
                viewer[i].setWidth(980);
                viewer[i].submit();
            }
        }catch(err){
            console.log(err);
        }			
	}
});