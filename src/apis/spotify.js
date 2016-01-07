angular.module('acodemy-app.apis.spotify', [])
.provider('SpotifyApi', function($sceDelegateProvider) {
  const whitelist = $sceDelegateProvider.resourceUrlWhitelist();
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
        const url = this.apiUrl + '/search';
        const config = angular.copy(this.defaults);

        config.params.q = query;
        config.params.type = types.join(',');

        return $http.get(url, config);
      },

      getAlbums: function(ids) {
        const url = this.apiUrl + '/albums';
        const config = angular.copy(this.defaults);
        config.params.ids = ids.join(',');

        return (
          $http
          .get(url, config)
          .then((response) => response.data.albums)
        );
      },

      getAlbum: function(id) {
        return (
          this
          .getAlbums([id])
          .then((albums) => albums[0])
        );
      },

      getArtists: function(ids) {
        const url = this.apiUrl + '/artists';
        const config = angular.copy(this.defaults);
        config.params.ids = ids.join(',');

        return (
          $http
          .get(url, config)
          .then((response) => response.data.artists)
        );
      },

      getArtist: function(id) {
        return (
          this
          .getArtists([id])
          .then((artists) => artists[0])
        );
      },

      getArtistsAlbums: function(id) {
        return (
          $http
          .get(`${this.apiUrl}/artists/${id}/albums`, this.defaults)
          .then((response) => response.data)
        );
      },

      getArtistsTopTracks: function(id) {
        const config = angular.copy(this.defaults);
        config.params.country = 'US';

        return (
          $http
          .get(`${this.apiUrl}/artists/${id}/top-tracks`, config)
          .then((response) => response.data.tracks)
        );
      },

      getRelatedArtists: function(id) {
        return (
          $http
          .get(`${this.apiUrl}/artists/${id}/related-artists`, this.defaults)
          .then((response) => response.data.artists)
        );
      }
    };
  };
});
