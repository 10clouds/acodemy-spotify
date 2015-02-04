'use strict';

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

  vm.clearSearch = function() {
    vm.searchQuery = '';
  };

  vm.openSearchPage = function() {
    if ($location.path() !== '/search') {
      $location.path('/search');
    }
  };
});
