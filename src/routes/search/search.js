angular.module('acodemy-app.routes.search', [
  'acodemy-app.apis.spotify',
  'acodemy-app.filters.duration',
  'acodemy-app.directives.play-button'
])
.controller('SearchRouteController', function($scope, $location, SpotifyApi) {
  $scope.searchResults = {};

  $scope.$watch(
    function() {
      return $location.search().q || '';
    },
    function(search) {
      if (!search) {
        $scope.searchResults = {};
        return;
      }

      SpotifyApi.search(search, ['album', 'artist', 'track'])
      .then(function(response) {
        $scope.searchResults = response.data;
      });
    }
  );
});
