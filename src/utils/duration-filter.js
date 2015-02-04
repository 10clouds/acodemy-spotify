angular.module('acodemy-app.utils.duration-filter', [])
.filter('duration', function() {
  var secondMs = 1000;
  var minuteMs = 60000;
  var hourMs = 3600000;

  return function(ms) {
    var parts = [];

    var hours = Math.floor(ms / hourMs);
    ms %= hourMs;

    if (hours) { parts.push(hours + ':'); }

    var minutes = Math.floor(ms / minuteMs);
    ms %= minuteMs;

    parts.push(hours && minutes < 10 ? '0' + minutes : minutes);

    var seconds = Math.floor(ms / secondMs);
    ms %= secondMs;

    parts.push(seconds < 10 ? '0' + seconds : seconds);

    return parts.join(':');
  };
});
