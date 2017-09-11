'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		copy : {
			files : {
				expand : true,
				cwd : 'src/main/resources/static/',
				src : [ '**/*' ],
				dest : 'target/classes/static/'
			}
		},
		watch : {
			scripts : {
				files : [ 'src/main/resources/static/**/*.js' ],
				tasks : [ 'copy' ]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask("default", [ "watch" ]);
}