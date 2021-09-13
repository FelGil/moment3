const {src, dest, parallel, series, watch} = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');

//sökvägar
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/css/*.css",
    jsPath: "src/js/*.js",
    imagePath: "src/images/*"
}

//html-task: kopierar över html
function copyHTML() {
    return src(files.htmlPath)
    .pipe(dest('pub'));
}

//css-task: kopierar, konktainerar och minifierar css
function cssTask() {
    return src(files.cssPath)
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(cssnano())
    .pipe(sourcemaps.write('../maps'))
    .pipe(dest('pub/css'))
    .pipe(browserSync.stream());
}

//js-task: kopierar, konktainerar och minifierar js
function jsTask() {
    return src(files.jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('../maps'))
    .pipe(dest('pub/js'));
}

//images-task: kopierar och minifierar bilder 
function imageTask() {
    return src(files.imagePath)
    .pipe(imagemin())
    .pipe(dest('pub/images'));
}

//watch-task: läser av ändringar i filerna
function watchTask() {

    browserSync.init({
        server: "./pub"
    });

    watch([files.htmlPath, files.cssPath, files.jsPath, files.imagePath], parallel(copyHTML, cssTask, jsTask, imageTask)).on('change',browserSync.reload);
}

exports.default = series(
    parallel(copyHTML, cssTask, jsTask, imageTask),
    watchTask
);