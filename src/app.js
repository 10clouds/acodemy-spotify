angular.module('app', [])
.filter('duration', function() {
  return function(durationMs) {
    var seconds = Math.round(durationMs / 1000);
    var minutes = Math.floor(seconds / 60);
    seconds %= 60;

    return minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
  };
})
.provider('SpotifyApi', function($sceDelegateProvider) {
  var whitelist = $sceDelegateProvider.resourceUrlWhitelist();
  whitelist.push('https://p.scdn.co/mp3-preview/**');
  $sceDelegateProvider.resourceUrlWhitelist(whitelist);

  this.apiUrl = 'https://api.spotify.com/v1';
  this.defaults = {
    params: {
      limit: 10
    }
  };

  this.$get = function($http) {
    return {
      apiUrl: this.apiUrl,
      defaults: this.defaults,
      search: function(query, types) {
        var url = this.apiUrl + '/search';
        var config = angular.copy(this.defaults);

        config.params.q = query;
        config.params.type = types.join(',');

        return $http.get(url, config);
      }
    };
  };
})
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
})
.controller('MainController', function($scope, $location, SpotifyApi) {
  $scope.search = $location.search().q || '';
  $scope.searchResults = {};

  $scope.$watch('search', function(search) {
    $location.search('q', search || null);

    if (!search) {
      $scope.searchResults = {};
      return;
    }

    SpotifyApi.search(search, ['album', 'artist', 'track'])
    .then(function(response) {
      $scope.searchResults = response.data;
    });
  });

});
