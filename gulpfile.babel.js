import gulp from 'gulp';
import './gulp/browser-test';
import './gulp/build';
import './gulp/linting';
import './gulp/test';

gulp.task('watch-code', function() {
  gulp.watch(['src/**/*', 'test/**/*'], ['lint-code', 'test']);
});

gulp.task('watch-docs', function() {
  gulp.watch(['api/**/*', 'docs/**/*'], ['lint-docs']);
});

// Run the linter and headless unit tests as you make changes.
gulp.task('watch', ['watch-code','watch-docs']);

// Run linter, tests
gulp.task('default', ['lint', 'test']);