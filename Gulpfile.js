const gulp = require('gulp')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const livereload = require('gulp-livereload')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const sassGlobbing = require('node-sass-globbing')
const pug = require('gulp-pug')

const plumberNotify = () => plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
})

gulp.task('sass', () => gulp
    .src('src/sass/vzlab-style/**/*.s[ac]ss')
    .pipe(plumberNotify())
    .pipe(sass({
        importer: sassGlobbing,
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css/'))
    .pipe(livereload())
)

gulp.task('pug', () => gulp
    .src([
        'src/docs/pug/**/*.pug',
        '!src/docs/pug/**/_*.pug',
    ])
    .pipe(plumberNotify())
    .pipe(pug())
    .pipe(gulp.dest('dist/'))
    .pipe(livereload())
)

gulp.task('build', [ 'sass', 'pug' ])
gulp.task('default', [ 'build' ], () => {
    livereload.listen();
    gulp.watch('src/sass/vzlab-style/**/*.s[ac]ss', [ 'sass' ]);
    gulp.watch('src/docs/pug/**/*.pug', [ 'pug' ]);
})
