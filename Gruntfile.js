module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    compass: {
      dev: {
        options: {
          config: 'config.rb',
          force: true
        }
      }
    },

    watch: {
      sass: {
        files: ['scss/**/*.scss'],
        tasks: ['compass:dev']
      },
      /* watch and see if our javascript files change, or new packages are installed */
      js: {
        files: ['assets/js/main.js', 'components/**/*.js'],
        tasks: ['uglify']
      },
      /* watch our files for change, reload */
      livereload: {
        files: ['*.html', '/*.css', 'assets/images/*', 'assets/js/{main.min.js, plugins.min.js}'],
        options: {
          livereload: true
        }
      }
    },
    
    csslint: {
      options: {
        compass: true,
        ignoreSassMixins: true,
        require: 'config.rb',
        verbose: true
      },
      dist: {
        src: ['scss/style.scss']
      }
    }

  });

  grunt.registerTask('default', 'watch');
  grunt.registerTask('check', 'csslint');

}