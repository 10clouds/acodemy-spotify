angular.module('app', [])
  .controller('MainController', function($scope, $http, $location) {
    $scope.search = $location.search().q || '';

    $scope.searchResults = {};

    $scope.$watch('search', (search) => {
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
        .then((response) => $scope.searchResults = response.data);
    });

  });
