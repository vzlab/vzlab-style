const gulp = require('gulp')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const livereload = require('gulp-livereload')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const pug = require('gulp-pug')

const plumberNotify = () => plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
})

const taskSass = () => gulp
    .src('src/sass/vzlab-style/**/*.s[ac]ss')
    .pipe(plumberNotify())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('docs/css/'))
    .pipe(livereload())

const taskPug = () => gulp
    .src([
        'src/docs/pug/**/*.pug',
        '!src/docs/pug/**/_*.pug',
    ])
    .pipe(plumberNotify())
    .pipe(pug({
        pretty: true,
    }))
    .pipe(gulp.dest('docs/'))
    .pipe(livereload())

const taskBuild = (done) => {
    taskSass()
    taskPug()
    done()
}

gulp.task('build', taskBuild)

gulp.task('default', (done) => {
    taskBuild(done)
    livereload.listen();
    gulp.watch('src/sass/vzlab-style/**/*.s[ac]ss', taskSass);
    gulp.watch('src/docs/pug/**/*.pug', taskPug);
})
