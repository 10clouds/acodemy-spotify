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
  var vm = this;

  vm.searchQuery = $location.search().q;
  vm.albums = {};
  vm.artists = {};
  vm.tracks = {};

  $scope.$watch(
    function() { return $location.search().q; },
    $debounce(function(searchQuery) {
      vm.searchQuery = searchQuery;

      if (!searchQuery) {
        vm.albums = {};
        vm.artists = {};
        vm.tracks = {};
        return;
      }

      SpotifyApi.search(
        searchQuery,
        ['album', 'artist', 'track'],
        {params: {limit: 10}}
      ).then(function(data) {
        vm.albums = data.albums;
        vm.artists = data.artists;
        vm.tracks = data.tracks;
      });
    }, 250)
  );
});
