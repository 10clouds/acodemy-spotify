angular.module('acodemy-app', [
  'ngRoute',

  'acodemy-app.navbar',
  'acodemy-app.routes.search',
  'acodemy-app.routes.album',
  'acodemy-app.routes.artist'
])
.config(function($routeProvider) {
  const defaultRoute = {
    redirectTo: '/search'
  };

  $routeProvider
    .when('/', defaultRoute)
    .otherwise(defaultRoute);
});
