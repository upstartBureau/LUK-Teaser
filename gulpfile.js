'use strict'

const gulp = require('gulp')
const path = require('path')
const less = require('gulp-less')
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')
const nodemon = require('gulp-nodemon')
const watchify = require('gulp-watchify')
const watch = require('gulp-watch')

var watching = false

gulp.task('enable-watch-mode', () => { watching = true })
gulp.task('watchify', ['enable-watch-mode', 'browserify'])
gulp.task('less', () => {
  return gulp.src('./client/source/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./client/public/lib/css/'))
})
gulp.task('copy', () => {
  return gulp.src('./client/source/img/**')
    .pipe(gulp.dest('./client/public/lib/img'))
})
gulp.task('browserify', watchify(function (watchify) {
  return gulp.src('./client/source/js/index.js')
    .pipe(watchify({ watch: watching }))
    .pipe(gulp.dest('./client/public/lib/js'))
}))
gulp.task('server', () => {
  nodemon({
    script: 'bin/www',
    ext: 'js'
  })
})

gulp.task('watch', () => {
  gulp.watch('./client/source/js/**/*.js', ['browserify'])
  gulp.watch('./client/source/less/**/*.less', ['less'])
  gulp.watch('./client/source/img/**/*.*', ['copy'])
  gulp.watch('./client/source/etc/**/*.*', ['copy'])
})
gulp.task('default', ['server', 'less', 'browserify', 'copy', 'watch'])
