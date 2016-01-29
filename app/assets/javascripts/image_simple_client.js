  if(window.XrkAd && XrkAd.init){
      XrkAd.init({token: "LQ55zl84j-wTeC8fHsZvNg", element: ".xrk-ad"})
  }else {
    var version = "image_simple_sdk";
    var callback = function(){
      console.info("sdk init callback ..... ")
      if(!XrkAd || !XrkAd.init) return;
      XrkAd.init({token: "LQ55zl84j-wTeC8fHsZvNg", element: ".xrk-ad"})
    };
    (function(){
      var script = document.createElement('script'); 
      script.type  = 'text/javascript';
      script.async = true;
      script.src   = "http://localhost:8000/js/" + version + ".js";
      var entry = document.getElementsByTagName('script')[0];
      entry.parentNode.insertBefore(script, entry);

      if (script.addEventListener)
        script.addEventListener('load', callback, false);
      else {
        script.attachEvent('onreadystatechange', function() {
          if (/complete|loaded/.test(script.readyState)) callback();
        });
      }
    })()
  } // end else