let gulp = require('gulp');
let nodemon = require('gulp-nodemon');

gulp.task('default', () => {
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            port: 8000
        },
        ignore: ['./node_modules/**']
    }).on('restart', () => {
        console.log('App restarted');
    })
});