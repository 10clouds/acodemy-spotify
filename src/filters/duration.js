angular.module('acodemy-app.filters.duration', [])
.filter('duration', function() {
  return function(durationMs) {
    var seconds = Math.round(durationMs / 1000);
    var minutes = Math.floor(seconds / 60);
    seconds %= 60;

    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };
});
