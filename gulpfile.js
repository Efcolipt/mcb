var gulp = require('gulp');
var hamburgers = require('hamburgers');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

function reCss(done){
	gulp.src(['./scss/**/*.scss', '!./scss/_base.scss','!./scss/media.scss'])
		.pipe(sourcemaps.init())
		.pipe(sass({
			errorLogToConsole: true,
			outputStyle: 'compressed'
		}))
		.on('error' , console.error.bind(console))
		.pipe(autoprefixer({
			browsers: ['last 4 versions'],
			cascade: false
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./css/'))
		.pipe(browserSync.stream());

		done();
}
function browserReload(done) {
	browserSync.reload();
	done();
}
function sync(done){
	browserSync.init({
		server:{
			baseDir: "./"
		},
		port:3000
	});

	done();
}
function watchFiles(){
	gulp.watch("./scss/**/*",reCss);
	gulp.watch("./**/*.js",browserReload);
	gulp.watch("./**/*.html",browserReload);
}

gulp.task('default', gulp.parallel(watchFiles,sync));
