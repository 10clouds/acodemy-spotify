angular.module('acodemy-app.routes.artist', [
  'ngRoute',
  'acodemy-app.apis.spotify',
  'acodemy-app.utils.duration-filter',
  'acodemy-app.directives.play-button'
])
.config(function($routeProvider) {
  $routeProvider.when('/artist/:id', {
    controller: 'ArtistPageController',
    controllerAs: 'page',
    templateUrl: 'routes/artist/artist.html'
  });
})
.controller('ArtistPageController', function(
  $scope, $q, $routeParams, SpotifyApi
) {
  var vm = this;

  $q.all([
    SpotifyApi.getArtists($routeParams.id),
    SpotifyApi.getArtistsTopTracks($routeParams.id),
    SpotifyApi.getArtistsAlbums($routeParams.id, {params: {limit: 10}}),
    SpotifyApi.getRelatedArtists($routeParams.id)
  ])
  .then(function(results) {
    vm.artist = results[0];
    vm.topTracks = results[1];
    vm.albums = results[2];
    vm.relatedArtists = results[3];
  });

});
