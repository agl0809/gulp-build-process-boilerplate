// Load plugins
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    del = require('del');

// Scripts
gulp.task('scripts', function () {
    return gulp.src('./src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'))
        .pipe(notify({
            title: 'JSHint',
            message: 'JSHint passed!',
        }))
        .pipe(concat('person.js'))
        .pipe(gulp.dest('dist/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'))
        .pipe(notify({
            title: "Build",
            message: 'Build success!'
        }));
});

// Clean
gulp.task('clean', function () {
    return del(['dist/']);
});

// Default task
gulp.task('build', ['clean'], function () {
    gulp.start('scripts');
});
