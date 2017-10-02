// https://cdnjs.com/libraries/backbone.js/tutorials/organizing-backbone-using-modules
// https://addyosmani.com/backbone-fundamentals/#organizing-modules-with-requirejs-and-amd
// http://jsfiddle.net/thedersen/udXL5/

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
	paths : {
		jquery : 'libs/jquery-3.2.1',
		underscore : 'libs/underscore',
		backbone : 'libs/backbone',
		'backbone-validation': 'libs/backbone-validation-amd',
		i18n : 'libs/i18next.amd.withJQuery',
		text : 'libs/text'
	},
    shim: {
        'backbone-validation': ['backbone']
    }

});

// Load our app module and pass it to our definition function
require([ 'app', ], function(App) {
	// The "app" dependency is passed in as "App"
	App.initialize();
});