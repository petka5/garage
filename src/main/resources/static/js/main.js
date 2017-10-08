// https://cdnjs.com/libraries/backbone.js/tutorials/organizing-backbone-using-modules
// https://addyosmani.com/backbone-fundamentals/#organizing-modules-with-requirejs-and-amd
// http://jsfiddle.net/thedersen/udXL5/

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
	
	// the application "bootstrap"
	deps: ['driver'],
	  
	paths : {
		jquery : 'libs/jquery/dist/jquery.min',
		underscore : 'libs/underscore/underscore-min',
		backbone : 'libs/backbone/backbone-min',
		'backbone-validation': 'libs/backbone.validation/dist/backbone-validation-amd-min',
		i18n : 'libs/i18next/i18next.amd.withJQuery',
		text : 'libs/text/text',
		'backbone.radio' : 'libs/backbone.radio/build/backbone.radio.min',
		marionette : 'libs/backbone.marionette/lib/backbone.marionette.min'
	},
	shim : {
		'backbone-validation' : [ 'backbone' ]
	}

});

// Load our app module and pass it to our definition function
/*require([ 'driver', ], function(App) {
	// The "app" dependency is passed in as "App"
	App.start();
});*/