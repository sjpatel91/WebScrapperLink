var request = require('request');
var cheerio = require('cheerio');



var url = 'http://pacerautomatedsolutions.com'
request(url, function(err, resp, body) {
	if (err)
		throw err;
	$ = cheerio.load(body);
	pacer_all_links = $('a');
	// Total number of links on webpage
	console.log('total number of links :' + $(pacer_all_links).length);
	$(pacer_all_links).each(function(i, each_link){
		// Prints text and link available on webpage
		console.log('\n')
		console.log( 'link:' + $(each_link).attr('href') + ' , text:' + $(each_link).text()  );
	
	});
});
