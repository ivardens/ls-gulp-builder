// задача - копирование картинок из папки исходников в итоговую папку

'use strict';

module.exports = function() {
  $.gulp.task('copy.image', function() {
    return $.gulp.src('./source/images/**/*.*', { since: $.gulp.lastRun('copy.image') }) //копируем только вновь добавленные шрифты
      .pipe($.gulp.dest($.config.root + '/assets/img'));
  });
};
