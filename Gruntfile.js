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
		less : {
			min : {
				options : {
					paths : [ 'src/main/resources/static/css/less' ],
					sourceMap : false,
					compress : true,
					banner : '/*! rev #<%= gitinfo.local.branch.current.SHA %>, built on <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>*/'
				},
				files : {
					'src/main/resources/static/css/styles.css' : 'src/main/resources/static/css/less/main.less'
				}
			}
		},
		copy : {
			js : {
				files : [ {
					expand : true,
					cwd : 'src/main/resources/static/js/',
					src : [ '**/*.js' ],
					dest : 'target/classes/static/js/'
				} ]
			},
			html : {
				files : [ {
					expand : true,
					cwd : 'src/main/resources/static/',
					src : [ '**/*.html' ],
					dest : 'target/classes/static/'
				} ]
			},
			styles : {
				files : [ {
					expand : true,
					cwd : 'src/main/resources/static/css/',
					src : [ '**/*.css' ],
					dest : 'target/classes/static/css/'
				} ]
			},
			translations: {
				files : [ {
					expand : true,
					cwd : 'src/main/resources/static/locales/',
					src : [ '**/*.json' ],
					dest : 'target/classes/static/locales/'
				} ]
			},
			templates: {
				files : [ {
					expand : true,
					cwd : 'src/main/resources/static/js/templates/',
					src : [ '**/*.html' ],
					dest : 'target/classes/static/js/templates/'
				} ]
			}
		},
		watch : {
			js : {
				files : [ 'src/main/resources/static/**/*.js' ],
				tasks : [ 'copy:js' ]
			},
			html:{
				files : [ 'src/main/resources/static/**/*.html' ],
				tasks : [ 'copy:html' ]		
			},
			less:{
				files : [ 'src/main/resources/static/css/**/*.less' ],
				tasks : [ 'gitinfo', 'less:min', 'copy:styles' ]		
			},
			translations:{
				files : [ 'src/main/resources/static/locales/**/*.json' ],
				tasks : [ 'copy:translations' ]		
			},
			templates:{
				files : [ 'src/main/resources/static/js/templates/**/*.html' ],
				tasks : [ 'copy:templates' ]		
			}
		},
		 gitinfo : {
			options : {
				cwd : '.'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-run');
	grunt.loadNpmTasks('grunt-gitinfo');
	
	grunt.registerTask("startMongo", [ "run:mongo" ]);
	grunt.registerTask("default", [ "watch" ]);
}