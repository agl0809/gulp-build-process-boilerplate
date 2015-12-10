// Load plugins
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    del = require('del');

// Scripts
gulp.task('scripts', function () {
    return gulp.src('src/*.js')
        .pipe(jshint.reporter('default'))
        .pipe(concat('person.js'))
        .pipe(gulp.dest('dist/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'))
        .pipe(notify({message: 'Scripts task complete'}));
});

// Clean
gulp.task('clean', function () {
    return del(['dist/']);
});

// Default task
gulp.task('default', ['clean'], function () {
    gulp.start('scripts');
});

// Watch
gulp.task('watch', function () {

    // Watch .js files
    gulp.watch('src/*.js', ['scripts']);

    // Create LiveReload server
    livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch(['dist/**']).on('change', livereload.changed);

});
