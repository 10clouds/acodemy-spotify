angular.module('acodemy-app', [
  // dependencies
  'ngAnimate',
  'ngCookies',
  'ngRoute',
  'ngSanitize',
  'ngTouch',

  // app navbar
  'acodemy-app.navbar',

  // app routes
  'acodemy-app.routes.search',
  'acodemy-app.routes.notFound'
])
.config(function($locationProvider) {
  $locationProvider.html5Mode(false);
});

