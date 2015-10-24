module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js',
        'models/**/*.js',
        'routes/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },

    express: {
      options: {
        port: 8080,
        //debug: true,
      //  background: false,
        // Override defaults here
      },
      dev: {
        options: {
          script: 'bin/www'
        }
      },
    },
    watch: {
      files: ['Gruntfile.js', '<%= jshint.files %>', 'views/*.jade'],
      tasks: ['jshint', 'express:dev'],
      options: {
        livereload: 35729,
      },
    }
  });

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'express:dev', 'watch']);

};
