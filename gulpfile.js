/**
 *
 * Gulpfile setup
 *
 * @since 1.0.0
 * @authors JBA Web Development Team
 * @package JBA Front-end Development
 */

// Project configuration
var project = 'JBA- Course Template', // Project name, used for build zip.
    url = 'http://localhost/branding/pages/001.html', // Local Development URL for BrowserSync. Change as-needed.
    buildInclude = [
        // include common file types
        '**/*.html',
        '**/*.css',
    ];

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        proxy: {
            target: url,
        }
    });
    gulp.watch("sass/course/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("sass/course/course.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css/"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
