angular.module('acodemy-app.routes.search', [
  'ngRoute',

  'acodemy-app.apis.spotify',
  'acodemy-app.filters.duration'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/search', {
      templateUrl: 'routes/search/search.html',
      controller: 'SearchRouteController',
      reloadOnSearch: false
    });
})
.controller('SearchRouteController', function(
  $scope, $location, $routeParams,
  SpotifyApi
) {
  $scope.searchResults = {};

  function update() {
    if (!$routeParams.q) {
      $scope.searchResults = {};
      return;
    }

    SpotifyApi.search($routeParams.q, ['album', 'artist', 'track'])
    .then(function(response) {
      $scope.searchResults = response.data;
    });
  }

  $scope.$on('$routeUpdate', update);
  update();
});
