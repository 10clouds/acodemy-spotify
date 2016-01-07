angular.module('app')
  .provider('SpotifyApi', function() {
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
        }
      };
    };
  })
