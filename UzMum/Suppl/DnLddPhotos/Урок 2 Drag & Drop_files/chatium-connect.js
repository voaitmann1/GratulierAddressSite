(()=>{
if($('script[src="https://chatium.com/static/getcourse_webview.js"]').length || 
   (window.location.pathname.indexOf('/pl/teach/control/lesson/webview') > -1)) { 
 if(typeof window.chatium_script_already_run !== "undefined") return false;
 window.chatium_script_already_run = true;
 $('body').css('padding','0 15px 80px 15px');
 let currentLayoutID;
 if ((currentLayoutID = /\/pl\/layout\/(\d+)/.exec(document.currentScript.src)) !== null) currentLayoutID = currentLayoutID[1];
 JSinjection("/pl/cms/layout/js?hash&bundle=0&id="+currentLayoutID);
 function JSinjection(fileName, callback) {
  var script = document.createElement( "script" )
  script.type = "text/javascript";
  if(typeof callback != "undefined") {
    if(script.readyState) {  // only required for IE <9
      script.onreadystatechange = function() {
        if ( script.readyState === "loaded" || script.readyState === "complete" ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {  //Others
      script.onload = callback;
    }
  }
  script.src = fileName;
  document.getElementsByTagName( "head" )[0].appendChild( script );
 }
}
})();