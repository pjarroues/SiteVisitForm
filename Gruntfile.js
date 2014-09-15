'use strict';

module.exports = function(grunt) {
// Project configuration.
grunt.initConfig({
@@ -6,13 +8,31 @@ module.exports = function(grunt) {
options: {
config: '.jscsrc',
},
all: [
 '<%= jshint.build.src %>',
 '<%= jshint.app.src %>',
 ],
 },
 jshint: {
 build: {
 options: {
 jshintrc: '.jshintrc',
 },
 src: '*.js',
 },
 app: {
 options: {
 jshintrc: 'src/.jshintrc',
 },
 src: 'src/**/*.js',
 },
},
});
 grunt.loadNpmTasks('grunt-jscs');
 grunt.loadNpmTasks('grunt-contrib-jshint');
// Register alias tasks.
grunt.registerTask('default', ['jscs', 'jshint']);

};
