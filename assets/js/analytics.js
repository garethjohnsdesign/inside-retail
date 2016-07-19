// Google Analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-80072725-1', 'auto');
  ga('send', 'pageview');

// End Google Analytics

// Munchkin
(function() {
var didInit = false;
function initMunchkin() {
	if(didInit === false) {
		didInit = true;
		Munchkin.init('324-QRH-396');
	}
}
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = '//munchkin.marketo.net/munchkin.js';
s.onreadystatechange = function() {
	if (this.readyState == 'complete' || this.readyState == 'loaded') {
		initMunchkin();
	}
};
s.onload = initMunchkin;
document.getElementsByTagName('head')[0].appendChild(s);
})();
// End Munchkin

// Hotjar
 (function(h,o,t,j,a,r){

        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};

        h._hjSettings={hjid:250540,hjsv:5};

        a=o.getElementsByTagName('head')[0];

        r=o.createElement('script');r.async=1;

        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;

        a.appendChild(r);

    })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
// End Hotjar