angular.module('acodemy-app.navbar', [
  'acodemy-app.directives.clearable-input'
])
.controller('NavbarController', function($scope, $location) {
  $scope.search = $location.search().q || '';

  $scope.$watch(
    'search',
    (search) => $location.search('q', search || null)
  );
});
