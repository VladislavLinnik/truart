var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('styles',function(){
    return gulp.src('./src/sass/style.+(scss|sass)')
                .pipe(concat('style.css'))
                .pipe(autoprefixer({
                    browsers: ['> 0.1%']
                }))
                .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
                .pipe(sassGlob())
                .pipe(gulp.dest('./app/css/'))
});

gulp.task('default', ['styles']);

gulp.task('watch', function(){
    gulp.watch('./src/sass/**/*.scss', function(event, cb) {
        setTimeout(function(){gulp.start('styles');},500) // задача выполниться через 500 миллисекунд и файл успеет сохраниться на диске
    });
});