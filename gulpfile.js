'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var approot = "./app/";
var aspDistPath = "./dist-asp/";

var staticFiles = [
    approot + "**/*.js",
    approot +  "**/*.css",
    approot + "**/*.html"
];

gulp.task('asp-release', function () {
    return gulp.src(staticFiles).pipe(gulp.dest(aspDistPath));
});

gulp.task('sass', function () {
    return gulp.src('./app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./app/**/*.scss', gulp.parallel('sass'));
});