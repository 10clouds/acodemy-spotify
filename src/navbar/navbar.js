angular.module('acodemy-app.navbar', [])
.controller('NavbarController', function($scope, $location) {
  $scope.search = $location.search().q || '';

  $scope.$watch('search', function(search) {
    $location.search('q', search || null);
  });

  $scope.openSearchRoute = function() {
    if ($location.path() !== '/search') {
      $location.path('/search');
    }
  };

  $scope.clearSearch = function() {
    $scope.search = '';
  };
});
