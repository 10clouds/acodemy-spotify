angular.module('acodemy-app', [
  'ngRoute',

  'acodemy-app.navbar',
  'acodemy-app.routes.search'
])
.config(function($routeProvider) {
  const defaultRoute = {
    redirectTo: '/search'
  };

  $routeProvider
    .when('/', defaultRoute)
    .otherwise(defaultRoute);
});
