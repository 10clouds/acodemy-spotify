angular.module('acodemy-app.directives.play-button', [])
.directive('playButton', function($document) {
  var players = [];

  var document = $document[0];
  var template = document.getElementById('playButtonTemplate');

  return {
    restrict: 'E',
    template: template.innerHTML,
    scope: {
      src: '@'
    },
    link: function($scope, $element, $attrs) {
      players.push($scope);

      var audio = $element.find('audio')[0];
      var states;

      $scope.play = function() {
        players.forEach(function(scope) {
          if (scope !== $scope) {
            scope.stop();
          }
        });

        if (audio.src !== $scope.src) {
          audio.src = $scope.src;
          audio.load();
        }
        audio.play();

        $scope.state = states.playing;
      };

      $scope.stop = function() {
        audio.pause();
        audio.currentTime = 0;
        $scope.state = states.stopped;
      };

      $scope.pause = function() {
        audio.pause();
        $scope.state = states.paused;
      };

      audio.addEventListener('ended', function() {
        $scope.state = states.stopped;
        $scope.$digest();
      });

      $scope.$watch('src', function(newSrc, oldSrc) {
        if (oldSrc && $scope.state !== states.stopped) {
          $scope.stop();
        }
      });

      states = {
        stopped: {
          iconClass: 'fa fa-play',
          next: $scope.play
        },
        paused: {
          iconClass: 'fa fa-play',
          next: $scope.play
        },
        playing: {
          iconClass: 'fa fa-pause',
          next: $scope.pause
        }
      };

      $scope.state = states.stopped;
    }
  };
});
