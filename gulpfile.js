var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    watch = require('gulp-watch'),
    exec = require('child_process').exec
    ;

gulp.task('watch-frontend', function () {
  return gulp.watch('public/src/**/*.*', { ignoreInitial: false }, ['build-frontend']);
});

gulp.task('build-frontend', function () {
  exec('npm run build', { cwd: 'public' }, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
});

gulp.task('nodemon', function () {
  nodemon({
    script: 'bin/www',
    ext: 'js',
    watch: 'routes',
    env: { 'NODE_ENV': 'development' }
  });
});

gulp.task('dev', ['nodemon', 'build-frontend', 'watch-frontend']);
