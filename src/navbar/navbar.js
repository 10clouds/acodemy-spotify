angular.module('acodemy-app.navbar', ['acodemy-app.routes.search'])
.controller('NavbarController', function($scope, $location) {
  var vm = this;

  vm.searchQuery = $location.search().q || null;

  $scope.$watch(
    function() { return vm.searchQuery; },
    function() {
      if (vm.searchQuery !== $location.search().q) {
        $location.replace();
        $location.search('q', vm.searchQuery || null);
      }
    }
  );

  $scope.$on('$routeChangeSuccess', function() {
    vm.initialized = true;
  });

  vm.isSearch = function() {
    return $location.path() === '/search';
  };

  vm.clearSearch = function() {
    vm.searchQuery = '';
  };

  vm.openSearchPage = function() {
    if ($location.path() !== '/search') {
      $location.path('/search');
    }
  };
});
