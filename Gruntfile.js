//'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		run : {
			mongo : {
				options : {
					cwd : 'C:/Development/mongodb/mongodb-win32-x86_64-2008plus-ssl-3.0.3-rc2/bin'
				},
				cmd : 'mongod',
				args : [ '--config=../../mongod.conf' ]
			}
		},
		copy : {
			files : {
				expand : true,
				cwd : 'src/main/resources/static/',
				src : [ '**/*' ],
				dest : 'target/classes/static/'
			}
		},
		watch : {
				files : [ 'src/main/resources/static/**/*' ],
				tasks : [ 'copy' ]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-run');
	
	grunt.registerTask("start", [ "run:mongo" ]);
	grunt.registerTask("default", [ "watch" ]);
}