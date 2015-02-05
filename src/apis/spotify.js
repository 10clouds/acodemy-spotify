angular.module('acodemy-app.apis.spotify', [])
.config(function($sceDelegateProvider) {
  // add the track preview urls to the whitelist, so they can be used
  // in <audio> elements
  var whitelist = $sceDelegateProvider.resourceUrlWhitelist();
  whitelist.push('https://p.scdn.co/mp3-preview/**');
  $sceDelegateProvider.resourceUrlWhitelist(whitelist);
})
.service('SpotifyApi', function($http) {
  var api = this;
  var baseUrl = 'https://api.spotify.com/v1';

  api.getUrl = function(path) {
    return baseUrl + path;
  };

  api.get = function(path, config) {
    return $http.get(this.getUrl(path), config);
  };

  function mergeConfigs() {
    var merged = {};
    var params = {};
    var headers = {};

    for (var i = 0; i < arguments.length; i++) {
      var config = arguments[i];
      if (!config) { continue; }

      angular.extend(merged, config);
      angular.extend(params, config.params);
      angular.extend(headers, config.headers);
    }

    merged.params = params;
    merged.headers = headers;
    return merged;
  }

  api.search = function(query, types, config) {
    // https://developer.spotify.com/web-api/search-item/
    if (!types) {
      types = ['album', 'artist'];
    }

    if (angular.isString(types)) {
      types = [types];
    }

    config = mergeConfigs(config, {params: {
      q: query,
      type: types.join(',')
    }});

    return this.get('/search', config).then(function(response) {
      return response.data;
    });
  };

  function getEntities(entity, ids, config) {
    var array = angular.isArray(ids);
    if (!array) {
      ids = [ids];
    }

    config = mergeConfigs(config, {params: {ids: ids.join(',')}});
    return api.get('/' + entity, config).then(function(response) {
      if (!array) {
        return response.data[entity][0];
      }
      return response.data[entity];
    });
  }

  api.getArtists = function(ids, config) {
    return getEntities('artists', ids, config);
  };

  api.getAlbums = function(ids, config) {
    return getEntities('albums', ids, config);
  };

  api.getTracks = function(ids, config) {
    return getEntities('tracks', ids, config);
  };

  api.getAlbumTracks = function(albumId, config) {
    return api.get('/albums/' + albumId + '/tracks', config)
    .then(function(response) {
      return response.data;
    });
  };

  api.getArtistsAlbums = function(artistId, config) {
    return api.get('/artists/' + artistId + '/albums', config)
    .then(function(response) {
      return response.data;
    });
  };

  api.getArtistsTopTracks = function(artistId, countryCode, config) {
    countryCode = countryCode || 'US';

    config = mergeConfigs(config, {params: {country: countryCode}});

    return api.get('/artists/' + artistId + '/top-tracks', config)
    .then(function(response) {
      return response.data.tracks;
    });
  };

  api.getRelatedArtists = function(artistId, config) {
    return api.get('/artists/' + artistId + '/related-artists', config)
    .then(function(response) {
      return response.data.artists;
    });
  };
});
