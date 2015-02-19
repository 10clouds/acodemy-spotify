angular.module('acodemy-app.routes.album', [
  'ngRoute',

  'acodemy-app.apis.spotify',
  'acodemy-app.filters.duration'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/album/:id', {
      templateUrl: 'routes/album/album.html',
      controller: 'AlbumRouteController'
    });
})
.controller('AlbumRouteController', function(
  $scope, $routeParams, SpotifyApi
) {
  $scope.album = {};

  SpotifyApi.getAlbum($routeParams.id)
  .then(function(album) {
    $scope.album = album;

    var artistIds = album.artists.reduce(
      function(list, artist) {
        list.push(artist.id);
        return list;
      },
      []
    );

    return SpotifyApi.getArtists(artistIds);
  })
  .then(function(artists) {
    $scope.artists = artists;
  });
});
