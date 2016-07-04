module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		less: {
			production: {
				files: {
					'css/style.css': 'css/less/style.less'
				}
			}
		}, 
		
		watch: {
			less: {
				files: ['css/less/*'],
				tasks: ['less']
			}
		}	
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	
	grunt.registerTask('dev', ['watch:less']);
	
};