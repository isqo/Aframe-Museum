module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-script-link-tags');

  grunt.initConfig({
    wiredep: {
      task: {
        src: ['index.html']
      }
    },
      tags: {
      build: {
          options: {
            scriptTemplate: '<script src="{{ path }}"></script>',
            linkTemplate: '<link href="{{ path }}"/>',
            openTag: '<!-- grunt:js -->',
            closeTag: '<!-- endgrunt -->'
          },
          src: [
              'js/project/*.js'
          ],
          dest: 'index.html'
      }
  }
  });
  
  grunt.registerTask('slt', ['tags']);
};