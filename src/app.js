angular.module('app', [])
.filter('duration', function() {
  return function(durationMs) {
    var seconds = Math.round(durationMs / 1000);
    var minutes = Math.floor(seconds / 60);
    seconds %= 60;

    return minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
  };
})
.controller('MainController', function($scope, $http, $location) {
  $scope.search = $location.search().q || '';

  $scope.searchResults = {};

  $scope.$watch('search', function(search) {
    $location.search('q', search || null);

    if (!search) {
      $scope.searchResults = {};
      return;
    }

    $http.get('https://api.spotify.com/v1/search', {
      params: {
        q: search,
        type: 'album,artist,track',
        limit: 10
      }
    })
    .then(function(response) {
      $scope.searchResults = response.data;
    });
  });

});
