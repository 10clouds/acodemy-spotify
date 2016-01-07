angular.module('acodemy-app.routes.search', [
  'acodemy-app.apis.spotify',
  'acodemy-app.filters.duration',
])
.controller('SearchRouteController', function($scope, $location, SpotifyApi) {
  $scope.searchResults = {};

  $scope.$watch(
    () => $location.search().q || '',
    (search) => {
      if (!search) {
        $scope.searchResults = {};
        return;
      }

      SpotifyApi
      .search(search, ['album', 'artist', 'track'])
      .then((response) => $scope.searchResults = response.data);
    }
  );
});
