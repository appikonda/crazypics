try{Typekit.load();}catch(e){}

var feed = new Instafeed({
		get: 'user',
		userId: 10584411,
        accessToken: '10584411.e757dbc.e31dff18fdef413da88dfc967caf161b',
        link: 'true',
        target='instagram'
        clientId: 'e757dbcd16ba4902a3ed040a938520cd',
        limit: '60',
        resolution: 'standard_resolution',
        sortBy: 'random',
		after: function() {
			var el = document.getElementById('instagram');
			if (el.classList)
				el.classList.add('show');
			else
				el.className += ' ' + 'show';
		}
});

window.onload = function() {
	feed.run();

	var _gauges = _gauges || [];
	(function() {
		var t   = document.createElement('script');
		t.type  = 'text/javascript';
		t.async = true;
		t.id    = 'gauges-tracker';
		t.setAttribute('data-site-id', '4d5aa2a95ffe1f587b000001');
		t.src = '//secure.gaug.es/track.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(t, s);
	})();
};
