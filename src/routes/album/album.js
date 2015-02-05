angular.module('acodemy-app.routes.album', [
  'ngRoute',
  'acodemy-app.apis.spotify',
  'acodemy-app.utils.duration-filter',
  'acodemy-app.directives.play-button'
])
.config(function($routeProvider) {
  $routeProvider.when('/album/:albumId/:trackId?', {
    controller: 'AlbumPageController',
    controllerAs: 'page',
    templateUrl: 'routes/album/album.html'
  });
})
.controller('AlbumPageController', function(
  $scope, $q, $routeParams, SpotifyApi
) {
  var vm = this;

  SpotifyApi.getAlbums($routeParams.albumId).then(function(album) {
    vm.album = album;
    vm.artists = album.artists;

    var artistIds = album.artists.map(function(artist) {
      return artist.id;
    });

    return SpotifyApi.getArtists(artistIds).then(function(artists) {
      vm.artists = artists;
    });
  });
});
