module.exports = function(grunt) {

  //把外链改为内嵌
  grunt.initConfig({
    inline: {
      dist: {
        /*
        //不需要在html页面添加__inline
        options:{
          cssmin: true,
          uglify: true,
          tag: ''
        },
        */
        options:{
          cssmin: true,
          uglify: true
        },
        src: 'htmls/testpage.html',
        dest: 'htmls-dist/testpage.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-inline');

  grunt.registerTask('default', ['inline']);

};