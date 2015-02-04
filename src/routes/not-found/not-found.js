angular.module('acodemy-app.routes.notFound', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider.otherwise({
    templateUrl: 'routes/not-found/not-found.html'
  });
});
