module.exports = function(grunt) {
// Project configuration.
grunt.initConfig({
jshint: { /* task configuration */ },
});
// Load a Grunt plugin.
grunt.loadNpmTasks('grunt-contrib-jshint');
// Default task(s).
grunt.registerTask('default', ['jshint']);
};
