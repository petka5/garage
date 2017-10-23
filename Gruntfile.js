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
		sync : {
			js : {
				files : [ {
					expand : true,
					cwd : 'src/main/resources/static/js/',
					src : [ '**/*.js', '!libs/**' ],
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
					cwd : 'src/main/resources/static/js/locales/',
					src : [ '**/*.json' ],
					dest : 'target/classes/static/js/locales/'
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
				files : [ 'src/main/resources/static/**/*.js','!src/main/resources/static/js/libs/**','!src/main/resources/static/old/**' ],
				tasks : [ 'sync:js' ]
			},
			html:{
				files : [ 'src/main/resources/static/**/*.html','!src/main/resources/static/js/libs/**','!src/main/resources/static/old/**' ],
				tasks : [ 'sync:html' ]		
			},
			less:{
				files : [ 'src/main/resources/static/css/**/*.less','!src/main/resources/static/js/libs/**','!src/main/resources/static/old/**' ],
				tasks : [ 'gitinfo', 'less:min', 'sync:styles' ]		
			},
			translations:{
				files : [ 'src/main/resources/static/js/locales/**/*.json','!src/main/resources/static/js/libs/**','!src/main/resources/static/old/**' ],
				tasks : [ 'sync:translations' ]		
			},
			templates:{
				files : [ 'src/main/resources/static/js/templates/**/*.html','!src/main/resources/static/js/libs/**','!src/main/resources/static/old/**' ],
				tasks : [ 'sync:templates' ]		
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
	grunt.loadNpmTasks('grunt-sync');
	
	grunt.registerTask("startMongo", [ "run:mongo" ]);
	grunt.registerTask("default", [ "watch" ]);
}