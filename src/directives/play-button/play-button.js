angular.module('acodemy-app.directives.play-button', [])
.directive('playButton', function() {
  var buttons = [];

  function stopOthers(button) {
    buttons.forEach(function(other) {
      if (other !== button) {
        other.stop();
      }
    });
  }

  return {
    restrict: 'E',
    templateUrl: 'directives/play-button/play-button.html',
    scope: {
      src: '@audioSrc'
    },
    controllerAs: 'player',
    bindToController: true,
    controller: function($scope, $element) {
      var vm = this;
      var element = $element[0];
      var audioElement = element.querySelector('audio');

      var loadedSrc = vm.src;
      var states = {};

      buttons.push(vm);

      audioElement.addEventListener('playing', function() {
        vm.state = states.playing;
        $scope.$apply();
      });

      audioElement.addEventListener('ended', function() {
        vm.state = states.stopped;
        $scope.$apply();
      });

      vm.play = function() {
        stopOthers(vm);

        if (!vm.src) { return; }

        if (loadedSrc !== vm.src) {
          vm.state = states.loading;
          audioElement.load();
        }

        audioElement.play();
      };

      vm.stop = function() {
        audioElement.pause();
        audioElement.currentTime = 0;
        vm.state = states.stopped;
      };

      vm.pause = function() {
        audioElement.pause();
        vm.state = states.paused;
      };

      states = {
        stopped: {
          icon: 'fa fa-play',
          next: vm.play
        },
        paused: {
          icon: 'fa fa-play',
          next: vm.play
        },
        playing: {
          icon: 'fa fa-pause',
          next: vm.pause
        },
        loading: {
          icon: 'fa fa-spin fa-circle-o-notch',
          next: function() {}
        }
      };

      $scope.$watch('player.src', function() {
        vm.stop();
      });

      vm.state = states.stopped;
    }
  };
});
