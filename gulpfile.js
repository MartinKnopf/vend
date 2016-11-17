var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    watch = require('gulp-watch'),
    exec = require('child_process').exec
    ;

// ------------------------------------------------------------------------------------
// TESTING
// ------------------------------------------------------------------------------------

gulp.task('test', function() {
  console.log('> -----------------------------------------');
  console.log('> running backend unit tests...');
  console.log('> -----------------------------------------');
  exec('npm run test', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);

    if(!err) {
      console.log('> -----------------------------------------');
      console.log('> running frontend unit tests...');
      console.log('> -----------------------------------------');
      exec('npm run unit', { cwd: 'public/vue' }, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
      });
    }
  });
});

gulp.task('test-backend', function () {
  exec('npm run test', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
});

gulp.task('test-frontend', function () {
  exec('npm run unit', { cwd: 'public/vue' }, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
});

// e2e test are currently not working inside the docker container
// gulp.task('e2e-frontend', function () {
//   exec('npm run e2e', { cwd: 'public/vue' }, function (err, stdout, stderr) {
//     console.log(stdout);
//     console.log(stderr);
//   });
// });

// ------------------------------------------------------------------------------------
// BUILD
// ------------------------------------------------------------------------------------

gulp.task('build', function() {
  console.log('> -----------------------------------------');
  console.log('> running backend unit tests...');
  console.log('> -----------------------------------------');
  exec('npm run test', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);

    if(!err) {
      console.log('> -----------------------------------------');
      console.log('> running frontend unit tests...');
      console.log('> -----------------------------------------');
      exec('npm run unit', { cwd: 'public/vue' }, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);

        if(!err) {
          console.log('> -----------------------------------------');
          console.log('> building frontend');
          console.log('> -----------------------------------------');
          exec('npm run build', { cwd: 'public/vue' }, function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
          });
        }
      });
    }
  });
});

gulp.task('build-frontend', function () {
  exec('npm run unit && npm run build', { cwd: 'public/vue' }, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
});

// ------------------------------------------------------------------------------------
// DEV
// ------------------------------------------------------------------------------------

gulp.task('dev', ['nodemon', 'build-frontend', 'watch-frontend']);

gulp.task('watch-frontend', function () {
  return gulp.watch('public/src/**/*.*', { ignoreInitial: false }, ['build-frontend']);
});

gulp.task('nodemon', function () {
  nodemon({
    script: 'bin/www',
    ext: 'js',
    watch: 'routes',
    env: { 'NODE_ENV': 'development' },
    legacyWatch: true
  });
});