angular.module('app')
  .controller('AlbumController', function($scope) {
    $scope.album = {
      id: "3B0PgLmgaW0gJth55ApWbw",
      image: "https://i.scdn.co/image/fa8a3b68578c65fff17f59cc5e5058b4e2fc48b2",
      name: "Transistor Original Soundtrack"
    };
  })
  .controller('TrackController', function($scope) {
    $scope.track = {
      album: {
        id: "2SmmWWZeC2MXYHpVZgvIHd",
        name: "Dubai House Collection"
      },
      artist: {
        id: "0wiHUYC8uutA5KUkABFIrT",
        name: "Parker & Aacht"
      },
      duration: "3:30",
      id: "6gxT7fJ1dAsghuFH6NiRZR",
      name: "Transistor - Edit",
      preview_url: "https://p.scdn.co/mp3-preview/f5b0c279a7ba80231ca94285abe0e647d80474f7"
    };
  });
