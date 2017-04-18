const gulp = require('gulp')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const livereload = require('gulp-livereload')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const sassGlobbing = require('gulp-sass-globbing')

const plumberNotify = () => plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
})

gulp.task('sass', () => gulp
    .src('src/sass/**/*.s[ac]ss')
    .pipe(plumberNotify())
    .pipe(sass({
        importer: sassGlobbing,
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload())
)


gulp.task('build', [ 'sass' ])
gulp.task('default', [ 'build' ], () => {
    livereload.listen();
    gulp.watch('src/sass/**/*.s[ac]ss', [ 'sass' ]);
})
