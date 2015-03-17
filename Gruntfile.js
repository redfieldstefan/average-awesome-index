module.exports = function(grunt) {
	'use strict';
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jscs');
	grunt.loadNpmTasks('grunt-browserify');

	grunt.initConfig({
		jshint: {
			files: [
				"q1.js"
			],

			options: {
				jshintrc: true
			}
		},

		browserify: {
			dev: {
				src: ['q1.js'],
				dest: 'bundle.js'
			}
		},

		watch: {
			files: [
				'q1.js'
			],

			tasks: [
				'jshint',
				'jscs',
				'browserify:dev'
			]
		},

		jscs: {
			src: ['q1.js'],

		    options: {
		    	config: '.jscsrc'
		    }				
    	}


	});

	grunt.registerTask('default', [
		'jshint',
		'jscs',
		'browserify:dev',
		'watch'
	]);

};

