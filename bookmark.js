(function() {

	/* location of scripts */
	var location = 'https://googledrive.com/host/0B0MUcRHkhiilcVpBeVVYdEtJUEE/';

	/* inject stylesheet into page */
	var css = document.createElement('link');
	css.rel = 'stylesheet';
	css.href = location + 'jira-cards.css';
	css.media = 'screen,print';
	css.type = 'text/css';
	document.getElementsByTagName('head')[0].appendChild(css);

	/* inject JavaScript into page */
	var js = document.createElement('script');
	js.src = location + 'jira-cards.js';
	document.body.appendChild(js);

})();