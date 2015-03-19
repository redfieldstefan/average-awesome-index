module.exports = function(grunt) {
	'use strict';
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jscs');
	grunt.loadNpmTasks('grunt-browserify');

	grunt.initConfig({
		jshint: {
			files: [
				"average-awesome-index.js"
			],

			options: {
				jshintrc: true
			}
		},

		browserify: {
			dev: {
				src: ['average-awesome-index.js'],
				dest: 'bundle.js'
			}
		},

		watch: {
			files: [
				'average-awesome-index.js'
			],

			tasks: [
				'jshint',
				'jscs',
				'browserify:dev'
			]
		},

		jscs: {
			src: ['average-awesome-index.js'],

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

