$(document).ready(function() {
    actuate.load("viewer");

    var iHub = "/iportal";
    var rptDocument = "/elections/Key Stats.rptdocument";
	var reqOps = new actuate.RequestOptions();
	var viewer;
	
	var bookmarks = ["keyStats"];
	
	actuate.initialize( iHub, reqOps, "administrator", null, myInit);
	
	function myInit()  {
        try {
            var config = new actuate.viewer.UIConfig();
                config.setContentPanel(new actuate.viewer.BrowserPanel());

            var uiOptions = new actuate.viewer.UIOptions();
                uiOptions.enableToolBar(false);

            viewer = [new actuate.Viewer("keyStats")];
			
			for(var i=0;i<viewer.length;i++) {
                viewer[i].setReportDocument(rptDocument);
                viewer[i].setReportletBookmark(bookmarks[i]);
                viewer[i].setUIOptions(uiOptions);
				viewer[i].setHeight(175);
                viewer[i].setWidth($("#keyStats").width());
                viewer[i].submit();
            }
        }catch(err){
            console.log(err);
        }			
	}
});