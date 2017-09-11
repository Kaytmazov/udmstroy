'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var minify = require('gulp-csso');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

// CSS
gulp.task('style', function() {
  gulp.src('assets/sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({browsers: [
        'last 5 versions'
      ]})
    ]))
    .pipe(gulp.dest('css'))
    .pipe(minify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

// JS
gulp.task('js', function(){
  return gulp.src('assets/js/**/*.js')
    .pipe(gulp.dest('js'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('js'))
    .pipe(browserSync.stream());
});

// Images
gulp.task('images', function() {
  return gulp.src('assets/img/**/*.{png,jpg,gif}')
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest('img'));
});

// SVG sprite
gulp.task('svg-sprite', function() {
  return gulp.src('assets/img/svg-sprite/*.svg')
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('img'));
});

// SVG min
gulp.task('svg-min', function() {
  return gulp.src('assets/img/svg/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('img'));
});

// Browser Sync
gulp.task('browser-sync', function() {
  browserSync.init({
    server: '.'
  });

  gulp.watch('assets/sass/**/*.scss', ['style']);
  gulp.watch('assets/js/**/*.js', ['js']);
  gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['style', 'js', 'browser-sync']);