angular.module('acodemy-app.routes.search', [
  'ngRoute',
  'acodemy-app.apis.spotify',
  'acodemy-app.utils.debounce',
  'acodemy-app.utils.duration-filter',
  'acodemy-app.directives.play-button'
])
.config(function($routeProvider) {
  $routeProvider.when('/', {redirectTo: '/search'});
  $routeProvider.when('/search', {
    controller: 'SearchPageController',
    controllerAs: 'page',
    templateUrl: 'routes/search/search.html',
    reloadOnSearch: false
  });
})
.controller('SearchPageController', function(
  $scope, $location, $q, $debounce, SpotifyApi
) {
  var ctrl = this;

  ctrl.searchQuery = $location.search().q;
  ctrl.albums = {};
  ctrl.artists = {};
  ctrl.tracks = {};

  $scope.$watch(
    function() { return $location.search().q; },
    $debounce(function(searchQuery) {
      ctrl.searchQuery = searchQuery;

      if (!searchQuery) {
        ctrl.albums = {};
        ctrl.artists = {};
        ctrl.tracks = {};
        return;
      }

      SpotifyApi.search(
        searchQuery,
        ['album', 'artist', 'track'],
        {params: {limit: 10}}
      ).then(function(data) {
        ctrl.albums = data.albums;
        ctrl.artists = data.artists;
        ctrl.tracks = data.tracks;
      });
    }, 250)
  );
});
