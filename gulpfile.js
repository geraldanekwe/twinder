var gulp = require("gulp");
var concat = require("gulp-concat");

gulp.task("default", function() {
  gulp.watch("./source/javascripts/**/*.js", ["js"]);
});

gulp.task("js", function() {
  gulp.src("./source/javascripts/**/*.js")
  .pipe(concat("bundle.js"))
  .pipe(gulp.dest("./public/javascripts/"))
});
