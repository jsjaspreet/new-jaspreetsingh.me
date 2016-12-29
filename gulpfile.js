const gulp = require('gulp')
const imageResize = require('gulp-image-resize')
const parallel = require('concurrent-transform')
const os = require('os')
const clean = require('gulp-clean')

const imageDst = './blogimage-thumbnails'

gulp.task('clean', () => gulp.src(imageDst, { read: false })
                             .pipe(clean()))

gulp.task('thumbnails', function() {
  gulp.src('./blogimages/*')
      .pipe(parallel(
        imageResize({
          width: 300,
          height: 230,
          crop: true
        }),
        os.cpus().length
      ))
      .pipe(gulp.dest(imageDst))
})

gulp.task('default', () => console.log("running!"))
