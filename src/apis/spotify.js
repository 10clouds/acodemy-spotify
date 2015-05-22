angular.module('acodemy-app.apis.spotify', [])
.provider('SpotifyApi', function($sceDelegateProvider) {
  var whitelist = $sceDelegateProvider.resourceUrlWhitelist();
  whitelist.push('https://p.scdn.co/mp3-preview/**');
  $sceDelegateProvider.resourceUrlWhitelist(whitelist);

  this.apiUrl = 'https://api.spotify.com/v1';
  this.defaults = {
    params: {
      limit: 10
    }
  };

  this.$get = function($http) {
    return {
      apiUrl: this.apiUrl,
      defaults: this.defaults,
      search: function(query, types) {
        var url = this.apiUrl + '/search';
        var config = angular.copy(this.defaults);

        config.params.q = query;
        config.params.type = types.join(',');

        return $http.get(url, config);
      },

      getAlbums: function(ids) {
        var url = this.apiUrl + '/albums';
        var config = angular.copy(this.defaults);
        config.params.ids = ids.join(',');

        return $http.get(url, config)
        .then(function(response) {
          return response.data.albums;
        });
      },
      getAlbum: function(id) {
        return this.getAlbums([id])
        .then(function(albums) {
          return albums[0];
        });
      },

      getArtists: function(ids) {
        var url = this.apiUrl + '/artists';
        var config = angular.copy(this.defaults);
        config.params.ids = ids.join(',');

        return $http.get(url, config)
        .then(function(response) {
          return response.data.artists;
        });
      },
      getArtist: function(id) {
        return this.getArtists([id])
        .then(function(artists) {
          return artists[0];
        });
      },
      getArtistsAlbums: function(id) {
        return $http.get(
          this.apiUrl + '/artists/' + id + '/albums',
          this.defaults
        )
        .then(function(response) {
          return response.data;
        });
      },
      getArtistsTopTracks: function(id) {
        var config = angular.copy(this.defaults);
        config.params.country = 'US';

        return $http.get(
          this.apiUrl + '/artists/' + id + '/top-tracks',
          config
        )
        .then(function(response) {
          return response.data.tracks;
        });
      },
      getRelatedArtists: function(id) {
        return $http.get(
          this.apiUrl + '/artists/' + id + '/related-artists',
          this.defaults
        )
        .then(function(response) {
          return response.data.artists;
        });
      }
    };
  };
});
