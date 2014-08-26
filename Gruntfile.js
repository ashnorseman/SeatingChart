module.exports = function(grunt) {

  grunt.initConfig({

    copy: {

      main: {
        expand: true,
        cwd: 'app/',
        src: ['**', '!less/**'],
        dest: 'dist/'
      },

      fonts: {
        expand: true,
        cwd: 'bower_components/font-awesome/',
        src: 'fonts/**.*',
        dest: 'dist/'
      }
    },

    less: {

      dev: {
        src: 'app/less/styles.less',
        dest: 'app/css/styles.min.css'
      },

      dist: {
        options: {
          compress: true
        },
        src: [
          'bower_components/normalize-css/normalize.css',
          'bower_components/font-awesome/css/font-awesome.min.css',
          'app/css/**.*'
        ],
        dest: 'dist/css/styles.min.css'
      }
    },

    uglify: {

      modernizr: {
        src: 'bower_components/modernizr/modernizr.js',
        dest: 'dist/js/modernizr.min.js'
      },

      others: {
        src: [
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/underscore/underscore.js',
          'bower_components/backbone/backbone.js',
          'app/js/views/*.js',
          'app/js/*.js'
        ],
        dest: 'dist/js/global.min.js'
      }
    },

    useminPrepare: {
      html: 'app/index.html',
      options: {
        dest: 'dist/index.html'
      }
    },

    usemin: {
      html: 'dist/index.html'
    },

    watch: {

      less: {
        files: ['app/less/**.*'],
        tasks: ['less']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['copy', 'less', 'uglify', 'useminPrepare', 'usemin', 'watch']);
};
