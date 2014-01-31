module.exports = function (grunt) {

    grunt.initConfig({

        less: {
            compile: {
                options: {
                    paths: ['app/stylesheets'],
                    yuicompress: true
                },
                files: {
                    'dist/application.css': 'app/stylesheets/app.less'
                }
            }
        },
        copy: {
            bower: {
                files: [
                    {expand: true, cwd: 'bower_components/jquery/', src: ['jquery.min.*'], dest: 'dist/libs/'},
                    {expand: true, cwd: 'bower_components/handlebars/', src: ['handlebars.min.js'], dest: 'dist/libs/'},
                    {expand: true, cwd: 'bower_components/ember/', src: ['ember.js'], dest: 'dist/libs/'},
                    {expand: true, cwd: 'bower_components/ember-data/', src: ['ember-data.js'], dest: 'dist/libs/'},
                    {expand: true, cwd: 'bower_components/bootstrap/dist/css/', src: ['bootstrap.css'], dest: 'dist/libs/'},
                    {expand: true, cwd: 'bower_components/moment/', src: ['moment.js'], dest: 'dist/libs/'}
                ]
            },
            static: {
                files: [
                    {expand: true, cwd: 'static/', src: ['**/*.*'], dest: 'dist/static/'}
                ]
            },
            libs: {
                files: [
                    {expand: true, cwd: 'libs/', src: ['**/*.*'], dest: 'dist/libs/'}
                ]
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000
                }
            }
        },
        watch: {
            scripts: {
                files: ['app/**/*.js'],
                tasks: ['build']
            },
            templates: {
                files: ['app/templates/**/*.hbs'],
                tasks: ['build']
            },
            styles: {
                files: ['app/stylesheets/*.less'],
                tasks: ['build']
            },
            static: {
                files: ['static/**/*.*'],
                tasks: ['build']
            },
            indexHTML: {
                files: ['app/index.html'],
                tasks: ['build']
            }
        },
        concat: {
            javascript: {
                src: 'app/**/*.js',
                dest: 'dist/application.js'
            }
        },
        emberTemplates: {
            compile: {
                options: {
                    templateBasePath: /app\/templates\//
                },
                files: {
                    'dist/templates.js': 'app/**/*.hbs'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ember-templates');

    grunt.registerTask('build', ['less:compile', 'copy', 'concat', 'emberTemplates']);
    grunt.registerTask('serve', ['connect', 'build', 'watch']);
    grunt.registerTask('default', ['serve']);
};