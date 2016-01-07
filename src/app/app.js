angular.module('app', [])
  .controller('MainController', function($scope, $location, SpotifyApi) {
    $scope.search = $location.search().q || '';

    $scope.searchResults = {};

    $scope.$watch('search', (search) => {
      $location.search('q', search || null);

      if (!search) {
        $scope.searchResults = {};
        return;
      }

      SpotifyApi
        .search(search, ['album', 'artist', 'track'])
        .then((response) => $scope.searchResults = response.data);
    });

  });
