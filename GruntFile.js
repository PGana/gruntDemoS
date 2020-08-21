var grunt = require('grunt');
const sass = require('node-sass');
/*
grunt.registerTask('hello', () => {
console.log('Hello there');
})

grunt.registerTask('hi', ()=>{
    console.log('Hi there');
})
grunt.registerTask('default', ['hello', 'hi']); */


/// TO execute above query simply say 'grunt hello' or 'grunt hi';

grunt.initConfig({
    /** Scss - Css Convertion */
    sass: {
        options: {
            implementation: sass
        },
        dist: {
            files: {
                'dist/temp/style.css/': 'scss/style.scss',
                'dist/temp/table.css/': 'scss/table.scss'
            }
        }
    },
    /** Concatination all JS and CSS */
    concat: {
        css: {
            //  src: ['dist/temp/*.css'], (or)
            src: ['dist/temp/table.css', 'dist/temp/style.css'],
            dest: 'dist/main.css'
        }
    },
    /** Minification of CSS  -
     * **Note : When we using grunt-contrib-cssmin lib then not required the separate lib for Concatination (just above line 'concat') */
    cssmin: {
        target: {
            files: [
                {
                    /// this ../* represent all files in temp with the extension of .css
                    src: ['dist/temp/*.css'],
                    dest: 'dist/main.min.css'
                }
            ]
        }
    },
    /// Jshint if there is error the this will prevent further execution
    jshint: {
        options: {
            /// Jshint config goes here.. ref https://jshint.com/docs/
            esversion: 6
        },
        files: { src: ['js/*.js'] }
    },
    /// ** Current installed uglifyied version is not going to support *ES6 features (ex , let, const, arrow fun...)
    uglify: {
        my_target: {
            files: {
                'dist/main.min.js': ['js/viewers.js']
            }
        }
    }
});
/// ** Current installed uglifyied version is not going to support *ES6 features (ex , let, const, arrow fun...)
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-concat');
///**Note : When we using grunt-contrib-cssmin lib then not required the separate lib for 'Concatination' grunt-contrib-concat (just above line 'concat')
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.registerTask('default', ['jshint', 'uglify', 'sass', 'cssmin']);
module.exports = grunt;