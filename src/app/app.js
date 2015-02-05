angular.module('acodemy-app', [
  // dependencies
  'ngAnimate',
  'ngRoute',
  'ngSanitize',
  'ngTouch',

  // app navbar
  'acodemy-app.navbar',

  // app routes
  'acodemy-app.routes.notFound',
  'acodemy-app.routes.search',
  'acodemy-app.routes.album',
  'acodemy-app.routes.artist'
])
.config(function($locationProvider) {
  $locationProvider.html5Mode(false);
});

