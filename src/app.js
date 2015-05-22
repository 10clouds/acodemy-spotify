angular.module('app', [])
.controller('NavbarController', function($scope) {
  $scope.search = '';
})

.controller('MainController', function($scope) {
  $scope.searchResults = {
    "albums" : {
      "href" : "https://api.spotify.com/v1/search?query=transistor&offset=0&limit=10&type=album",
      "items" : [ {
        "album_type" : "album",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/3B0PgLmgaW0gJth55ApWbw"
        },
        "href" : "https://api.spotify.com/v1/albums/3B0PgLmgaW0gJth55ApWbw",
        "id" : "3B0PgLmgaW0gJth55ApWbw",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/6776280c479cbd4a09c363e1208e4aa40cb79e93",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/fa8a3b68578c65fff17f59cc5e5058b4e2fc48b2",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/9c1b35f0b08f382fada5e32ba94c31cc48646ee5",
          "width" : 64
        } ],
        "name" : "Transistor Original Soundtrack",
        "type" : "album",
        "uri" : "spotify:album:3B0PgLmgaW0gJth55ApWbw"
      }, {
        "album_type" : "single",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/4i7SWqzK0NC8pW1f0qWxSb"
        },
        "href" : "https://api.spotify.com/v1/albums/4i7SWqzK0NC8pW1f0qWxSb",
        "id" : "4i7SWqzK0NC8pW1f0qWxSb",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/25728b3402c1c13c4a1e40d8f5d60ce38d327113",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/b90f4bdada9bb8b08939d2c1719e4f8e48c1c410",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/6f794c84a4b3cd61d1e97750575d8d8a662d880b",
          "width" : 64
        } ],
        "name" : "Twisted Transistor",
        "type" : "album",
        "uri" : "spotify:album:4i7SWqzK0NC8pW1f0qWxSb"
      }, {
        "album_type" : "album",
        "available_markets" : [ "AD", "AT", "BE", "BG", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK", "TR" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5ftdVfvUX3IiGvMwjFDhYD"
        },
        "href" : "https://api.spotify.com/v1/albums/5ftdVfvUX3IiGvMwjFDhYD",
        "id" : "5ftdVfvUX3IiGvMwjFDhYD",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/802e66049594d48a607243156af73f7ff3faa6dc",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/21f386d0b46e5a22bb292a8958df1ed601196f71",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/76ffa656f71364a7644edb2a5b94f282def34f2b",
          "width" : 64
        } ],
        "name" : "Transistor Radio",
        "type" : "album",
        "uri" : "spotify:album:5ftdVfvUX3IiGvMwjFDhYD"
      }, {
        "album_type" : "album",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5TiFIK3DBVyJqzMurOg7PR"
        },
        "href" : "https://api.spotify.com/v1/albums/5TiFIK3DBVyJqzMurOg7PR",
        "id" : "5TiFIK3DBVyJqzMurOg7PR",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/dc88767bcc557768c85e0846926df5269c81d948",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/623cb23ac68a026a114c3ade1b7115252c2cac2a",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/2ec9175f460c2f70bb3d08b9a51e46344097ed67",
          "width" : 64
        } ],
        "name" : "Transistor Original Soundtrack Extended",
        "type" : "album",
        "uri" : "spotify:album:5TiFIK3DBVyJqzMurOg7PR"
      }, {
        "album_type" : "album",
        "available_markets" : [ "AD", "AR", "AT", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/66MztQRqLYgND6LTeIpRFx"
        },
        "href" : "https://api.spotify.com/v1/albums/66MztQRqLYgND6LTeIpRFx",
        "id" : "66MztQRqLYgND6LTeIpRFx",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/6c6c0310c99143b4382bd93fa7449d085488b41a",
          "width" : 617
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/360f462ae657e0c20073bc5ab1fbf8bdba83497a",
          "width" : 289
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/44ac4e2e284d2339887d10cdedd950f115dc80e8",
          "width" : 62
        } ],
        "name" : "Transistor",
        "type" : "album",
        "uri" : "spotify:album:66MztQRqLYgND6LTeIpRFx"
      }, {
        "album_type" : "album",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/7B6I4JtgVEdUgfsJ0wibXD"
        },
        "href" : "https://api.spotify.com/v1/albums/7B6I4JtgVEdUgfsJ0wibXD",
        "id" : "7B6I4JtgVEdUgfsJ0wibXD",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/163ddefcbc4dd2e4115508204e5343a8372d81b6",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/55d165781c1e284922d0cbcac04eb70381070f11",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/7178b4a97fad77659e8ed30bc540e1c28adb3f21",
          "width" : 64
        } ],
        "name" : "Transistor Sister",
        "type" : "album",
        "uri" : "spotify:album:7B6I4JtgVEdUgfsJ0wibXD"
      }, {
        "album_type" : "album",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/78IWns6XmfU8P0sHRgg2j3"
        },
        "href" : "https://api.spotify.com/v1/albums/78IWns6XmfU8P0sHRgg2j3",
        "id" : "78IWns6XmfU8P0sHRgg2j3",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/bb282f14f550d7f50a74f40ca4bf2b8d9678e11e",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/edae7163a9fde86e852d5b403a6db99d9ee5e81b",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/0666ad10224901f8612944dc0b0c9efbcdd86ab4",
          "width" : 64
        } ],
        "name" : "The Ladybug Transistor",
        "type" : "album",
        "uri" : "spotify:album:78IWns6XmfU8P0sHRgg2j3"
      }, {
        "album_type" : "album",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "NI", "NL", "NO", "NZ", "PA", "PE", "PL", "PT", "PY", "RO", "SE", "SI", "SK", "SV", "TR", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5zmdEAGl5kZHmYDIWy4z6W"
        },
        "href" : "https://api.spotify.com/v1/albums/5zmdEAGl5kZHmYDIWy4z6W",
        "id" : "5zmdEAGl5kZHmYDIWy4z6W",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/abbf8848309655fb4ffb585e78b7499fdf8e0cca",
          "width" : 617
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/aef0b43fb16343774abe10ee9dab227683e0630d",
          "width" : 289
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/dd7315590d473a54e12ce71d615920c6f36b2795",
          "width" : 62
        } ],
        "name" : "Transistor",
        "type" : "album",
        "uri" : "spotify:album:5zmdEAGl5kZHmYDIWy4z6W"
      }, {
        "album_type" : "single",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/03TGQ5jvnLGigCQG43V0iD"
        },
        "href" : "https://api.spotify.com/v1/albums/03TGQ5jvnLGigCQG43V0iD",
        "id" : "03TGQ5jvnLGigCQG43V0iD",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/eb457f106c46af0aebb3ffd0345beb4cd742095b",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/86e04ee8fff0e1d326956bd6246474d018d61617",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/45e23f1555f8ed13ee23991fd139924b02031450",
          "width" : 64
        } ],
        "name" : "Transistor",
        "type" : "album",
        "uri" : "spotify:album:03TGQ5jvnLGigCQG43V0iD"
      }, {
        "album_type" : "single",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5YaUuZRZhkpHnizUDyoZuB"
        },
        "href" : "https://api.spotify.com/v1/albums/5YaUuZRZhkpHnizUDyoZuB",
        "id" : "5YaUuZRZhkpHnizUDyoZuB",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/94bf64771b9577cd3c1d27ee7c27866b3ebd4700",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/7142cff067677b9db9cd8e519f1281bf8c16255a",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/770cd0b6f2c0984098c72490db59dbe3f7207ddf",
          "width" : 64
        } ],
        "name" : "Twisted Transistor",
        "type" : "album",
        "uri" : "spotify:album:5YaUuZRZhkpHnizUDyoZuB"
      } ],
      "limit" : 10,
      "next" : "https://api.spotify.com/v1/search?query=transistor&offset=10&limit=10&type=album",
      "offset" : 0,
      "previous" : null,
      "total" : 156
    },
    "artists" : {
      "href" : "https://api.spotify.com/v1/search?query=transistor&offset=0&limit=10&type=artist",
      "items" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/15qL2oIvXdTLPUiZZypsvi"
        },
        "followers" : {
          "href" : null,
          "total" : 983
        },
        "genres" : [ "e6fi" ],
        "href" : "https://api.spotify.com/v1/artists/15qL2oIvXdTLPUiZZypsvi",
        "id" : "15qL2oIvXdTLPUiZZypsvi",
        "images" : [ {
          "height" : 375,
          "url" : "https://i.scdn.co/image/2a19f6a33d6ba3ab183728467a6b53e086e12a27",
          "width" : 500
        }, {
          "height" : 150,
          "url" : "https://i.scdn.co/image/a88754811f830009fb9e0de40d70325b5f6ff3ef",
          "width" : 200
        }, {
          "height" : 48,
          "url" : "https://i.scdn.co/image/de44281fa9cde03416e3eb3e0da1cc593af2d08c",
          "width" : 64
        } ],
        "name" : "The Ladybug Transistor",
        "popularity" : 27,
        "type" : "artist",
        "uri" : "spotify:artist:15qL2oIvXdTLPUiZZypsvi"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0cJNhU8QXixX3MGlhDUFzC"
        },
        "followers" : {
          "href" : null,
          "total" : 75
        },
        "genres" : [ ],
        "href" : "https://api.spotify.com/v1/artists/0cJNhU8QXixX3MGlhDUFzC",
        "id" : "0cJNhU8QXixX3MGlhDUFzC",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/8e8928de01304da150d4211f9645634c2ceaa8ee",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/902fd0a2fef30eaaf5a12e278760d4e32092a6c6",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/33fedb5482d81446fba99cdf565c5ad5c5bf7c51",
          "width" : 64
        } ],
        "name" : "Transistor",
        "popularity" : 10,
        "type" : "artist",
        "uri" : "spotify:artist:0cJNhU8QXixX3MGlhDUFzC"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/28BUWQCFf8bbdUKLhTy6Hk"
        },
        "followers" : {
          "href" : null,
          "total" : 17
        },
        "genres" : [ ],
        "href" : "https://api.spotify.com/v1/artists/28BUWQCFf8bbdUKLhTy6Hk",
        "id" : "28BUWQCFf8bbdUKLhTy6Hk",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/a8244789640ad10b73cf34d5a77f8564cca4f1f0",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/0ea7bc5a6c2b821fcf56b56d4e3cbbc2d1665770",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/6bc092c491d7458c997bef7b82851bcb92a0c661",
          "width" : 64
        } ],
        "name" : "Transistor Transistor",
        "popularity" : 8,
        "type" : "artist",
        "uri" : "spotify:artist:28BUWQCFf8bbdUKLhTy6Hk"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0892phj8pcor09UAHFNI07"
        },
        "followers" : {
          "href" : null,
          "total" : 6
        },
        "genres" : [ ],
        "href" : "https://api.spotify.com/v1/artists/0892phj8pcor09UAHFNI07",
        "id" : "0892phj8pcor09UAHFNI07",
        "images" : [ ],
        "name" : "Love Transistor",
        "popularity" : 8,
        "type" : "artist",
        "uri" : "spotify:artist:0892phj8pcor09UAHFNI07"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7ygFZSUBAxGGMQQAC36Lcq"
        },
        "followers" : {
          "href" : null,
          "total" : 0
        },
        "genres" : [ ],
        "href" : "https://api.spotify.com/v1/artists/7ygFZSUBAxGGMQQAC36Lcq",
        "id" : "7ygFZSUBAxGGMQQAC36Lcq",
        "images" : [ ],
        "name" : "Transistor Rhythm",
        "popularity" : 0,
        "type" : "artist",
        "uri" : "spotify:artist:7ygFZSUBAxGGMQQAC36Lcq"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6HS2SP5hBtnFGuofZ4vCXN"
        },
        "followers" : {
          "href" : null,
          "total" : 0
        },
        "genres" : [ ],
        "href" : "https://api.spotify.com/v1/artists/6HS2SP5hBtnFGuofZ4vCXN",
        "id" : "6HS2SP5hBtnFGuofZ4vCXN",
        "images" : [ ],
        "name" : "TRANSISTOR GLAMOUR",
        "popularity" : 0,
        "type" : "artist",
        "uri" : "spotify:artist:6HS2SP5hBtnFGuofZ4vCXN"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2EOJsSvHnh0ycg1mGUiLRl"
        },
        "followers" : {
          "href" : null,
          "total" : 0
        },
        "genres" : [ ],
        "href" : "https://api.spotify.com/v1/artists/2EOJsSvHnh0ycg1mGUiLRl",
        "id" : "2EOJsSvHnh0ycg1mGUiLRl",
        "images" : [ ],
        "name" : "Transistor State",
        "popularity" : 0,
        "type" : "artist",
        "uri" : "spotify:artist:2EOJsSvHnh0ycg1mGUiLRl"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/47eDq3YCOxRottfFgK1phZ"
        },
        "followers" : {
          "href" : null,
          "total" : 0
        },
        "genres" : [ ],
        "href" : "https://api.spotify.com/v1/artists/47eDq3YCOxRottfFgK1phZ",
        "id" : "47eDq3YCOxRottfFgK1phZ",
        "images" : [ ],
        "name" : "Gigi Transistor",
        "popularity" : 0,
        "type" : "artist",
        "uri" : "spotify:artist:47eDq3YCOxRottfFgK1phZ"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0nMDZniIfwAhkhr3Nm5JHs"
        },
        "followers" : {
          "href" : null,
          "total" : 4
        },
        "genres" : [ ],
        "href" : "https://api.spotify.com/v1/artists/0nMDZniIfwAhkhr3Nm5JHs",
        "id" : "0nMDZniIfwAhkhr3Nm5JHs",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/48144a57033de875a9bf22f6f4ff0fa8668143e2",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/db0a324a2aa8e16d9ca4fec36e1ff019a89c578b",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/892aa417782fc46495b6b615b50ab9d45069ad04",
          "width" : 64
        } ],
        "name" : "Transistor Rodeo",
        "popularity" : 1,
        "type" : "artist",
        "uri" : "spotify:artist:0nMDZniIfwAhkhr3Nm5JHs"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4W67uExZahUc6ILGgA06Lh"
        },
        "followers" : {
          "href" : null,
          "total" : 0
        },
        "genres" : [ ],
        "href" : "https://api.spotify.com/v1/artists/4W67uExZahUc6ILGgA06Lh",
        "id" : "4W67uExZahUc6ILGgA06Lh",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/4a1aaeec9fa5088b67fcc1e1e987636ccedba35e",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/566ff9e43c682abba15fb957f96a2e1c7b0d24ae",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/688bd117f33d6f51719e49ea8653913b7b729706",
          "width" : 64
        } ],
        "name" : "Transistor Sun",
        "popularity" : 0,
        "type" : "artist",
        "uri" : "spotify:artist:4W67uExZahUc6ILGgA06Lh"
      } ],
      "limit" : 10,
      "next" : "https://api.spotify.com/v1/search?query=transistor&offset=10&limit=10&type=artist",
      "offset" : 0,
      "previous" : null,
      "total" : 32
    },
    "tracks" : {
      "href" : "https://api.spotify.com/v1/search?query=transistor&offset=0&limit=10&type=track",
      "items" : [ {
        "album" : {
          "album_type" : "compilation",
          "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/2SmmWWZeC2MXYHpVZgvIHd"
          },
          "href" : "https://api.spotify.com/v1/albums/2SmmWWZeC2MXYHpVZgvIHd",
          "id" : "2SmmWWZeC2MXYHpVZgvIHd",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/d6d956e70837aa51d2a64dfa412dd115abe05bc8",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/a58b80f10c1d336c3b50a6b740c0d8428b6034f8",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/6fbc6842e881b5f2e6dad033e132c4a6fdb4c588",
            "width" : 64
          } ],
          "name" : "Dubai House Collection",
          "type" : "album",
          "uri" : "spotify:album:2SmmWWZeC2MXYHpVZgvIHd"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0wiHUYC8uutA5KUkABFIrT"
          },
          "href" : "https://api.spotify.com/v1/artists/0wiHUYC8uutA5KUkABFIrT",
          "id" : "0wiHUYC8uutA5KUkABFIrT",
          "name" : "Parker & Aacht",
          "type" : "artist",
          "uri" : "spotify:artist:0wiHUYC8uutA5KUkABFIrT"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 210445,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "DEPY71300043"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/6gxT7fJ1dAsghuFH6NiRZR"
        },
        "href" : "https://api.spotify.com/v1/tracks/6gxT7fJ1dAsghuFH6NiRZR",
        "id" : "6gxT7fJ1dAsghuFH6NiRZR",
        "is_playable" : true,
        "name" : "Transistor - Edit",
        "popularity" : 1,
        "preview_url" : "https://p.scdn.co/mp3-preview/f5b0c279a7ba80231ca94285abe0e647d80474f7",
        "track_number" : 28,
        "type" : "track",
        "uri" : "spotify:track:6gxT7fJ1dAsghuFH6NiRZR"
      }, {
        "album" : {
          "album_type" : "single",
          "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/4i7SWqzK0NC8pW1f0qWxSb"
          },
          "href" : "https://api.spotify.com/v1/albums/4i7SWqzK0NC8pW1f0qWxSb",
          "id" : "4i7SWqzK0NC8pW1f0qWxSb",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/25728b3402c1c13c4a1e40d8f5d60ce38d327113",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/b90f4bdada9bb8b08939d2c1719e4f8e48c1c410",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/6f794c84a4b3cd61d1e97750575d8d8a662d880b",
            "width" : 64
          } ],
          "name" : "Twisted Transistor",
          "type" : "album",
          "uri" : "spotify:album:4i7SWqzK0NC8pW1f0qWxSb"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3RNrq3jvMZxD9ZyoOZbQOD"
          },
          "href" : "https://api.spotify.com/v1/artists/3RNrq3jvMZxD9ZyoOZbQOD",
          "id" : "3RNrq3jvMZxD9ZyoOZbQOD",
          "name" : "Korn",
          "type" : "artist",
          "uri" : "spotify:artist:3RNrq3jvMZxD9ZyoOZbQOD"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 188226,
        "explicit" : true,
        "external_ids" : {
          "isrc" : "USVI20500553"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/02NcZ0ugRA786A64bnsnnc"
        },
        "href" : "https://api.spotify.com/v1/tracks/02NcZ0ugRA786A64bnsnnc",
        "id" : "02NcZ0ugRA786A64bnsnnc",
        "is_playable" : true,
        "name" : "Twisted Transistor",
        "popularity" : 65,
        "preview_url" : "https://p.scdn.co/mp3-preview/73f9b7db0f0d34d62f9adbc300b817f0586857de",
        "track_number" : 1,
        "type" : "track",
        "uri" : "spotify:track:02NcZ0ugRA786A64bnsnnc"
      }, {
        "album" : {
          "album_type" : "album",
          "available_markets" : [ "AD", "AT", "BE", "BG", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK", "TR" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/5ftdVfvUX3IiGvMwjFDhYD"
          },
          "href" : "https://api.spotify.com/v1/albums/5ftdVfvUX3IiGvMwjFDhYD",
          "id" : "5ftdVfvUX3IiGvMwjFDhYD",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/802e66049594d48a607243156af73f7ff3faa6dc",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/21f386d0b46e5a22bb292a8958df1ed601196f71",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/76ffa656f71364a7644edb2a5b94f282def34f2b",
            "width" : 64
          } ],
          "name" : "Transistor Radio",
          "type" : "album",
          "uri" : "spotify:album:5ftdVfvUX3IiGvMwjFDhYD"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6nXSnNEdLuKTzAQozRtqiI"
          },
          "href" : "https://api.spotify.com/v1/artists/6nXSnNEdLuKTzAQozRtqiI",
          "id" : "6nXSnNEdLuKTzAQozRtqiI",
          "name" : "M. Ward",
          "type" : "artist",
          "uri" : "spotify:artist:6nXSnNEdLuKTzAQozRtqiI"
        } ],
        "available_markets" : [ "AD", "AT", "BE", "BG", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK", "TR" ],
        "disc_number" : 1,
        "duration_ms" : 164066,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "USMRG0460032"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/7Dnzq7XRFvC3jkbFJkqtBb"
        },
        "href" : "https://api.spotify.com/v1/tracks/7Dnzq7XRFvC3jkbFJkqtBb",
        "id" : "7Dnzq7XRFvC3jkbFJkqtBb",
        "is_playable" : true,
        "name" : "Lullaby + Exile",
        "popularity" : 55,
        "preview_url" : "https://p.scdn.co/mp3-preview/79c0e01b4bafb6535fc4bb463696b38731f2d36c",
        "track_number" : 15,
        "type" : "track",
        "uri" : "spotify:track:7Dnzq7XRFvC3jkbFJkqtBb"
      }, {
        "album" : {
          "album_type" : "album",
          "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/3B0PgLmgaW0gJth55ApWbw"
          },
          "href" : "https://api.spotify.com/v1/albums/3B0PgLmgaW0gJth55ApWbw",
          "id" : "3B0PgLmgaW0gJth55ApWbw",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/6776280c479cbd4a09c363e1208e4aa40cb79e93",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/fa8a3b68578c65fff17f59cc5e5058b4e2fc48b2",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/9c1b35f0b08f382fada5e32ba94c31cc48646ee5",
            "width" : 64
          } ],
          "name" : "Transistor Original Soundtrack",
          "type" : "album",
          "uri" : "spotify:album:3B0PgLmgaW0gJth55ApWbw"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0ZMWrgLff357yxLyEU77a1"
          },
          "href" : "https://api.spotify.com/v1/artists/0ZMWrgLff357yxLyEU77a1",
          "id" : "0ZMWrgLff357yxLyEU77a1",
          "name" : "Darren Korb",
          "type" : "artist",
          "uri" : "spotify:artist:0ZMWrgLff357yxLyEU77a1"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 201324,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "QM9HB1400001"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/4zmT3KiW5UVfzGSIkYbs0y"
        },
        "href" : "https://api.spotify.com/v1/tracks/4zmT3KiW5UVfzGSIkYbs0y",
        "id" : "4zmT3KiW5UVfzGSIkYbs0y",
        "is_playable" : true,
        "name" : "Old Friends",
        "popularity" : 56,
        "preview_url" : "https://p.scdn.co/mp3-preview/27d0aa224616b39d6469bc0e0bf27388e3cca973",
        "track_number" : 1,
        "type" : "track",
        "uri" : "spotify:track:4zmT3KiW5UVfzGSIkYbs0y"
      }, {
        "album" : {
          "album_type" : "album",
          "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/3B0PgLmgaW0gJth55ApWbw"
          },
          "href" : "https://api.spotify.com/v1/albums/3B0PgLmgaW0gJth55ApWbw",
          "id" : "3B0PgLmgaW0gJth55ApWbw",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/6776280c479cbd4a09c363e1208e4aa40cb79e93",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/fa8a3b68578c65fff17f59cc5e5058b4e2fc48b2",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/9c1b35f0b08f382fada5e32ba94c31cc48646ee5",
            "width" : 64
          } ],
          "name" : "Transistor Original Soundtrack",
          "type" : "album",
          "uri" : "spotify:album:3B0PgLmgaW0gJth55ApWbw"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0ZMWrgLff357yxLyEU77a1"
          },
          "href" : "https://api.spotify.com/v1/artists/0ZMWrgLff357yxLyEU77a1",
          "id" : "0ZMWrgLff357yxLyEU77a1",
          "name" : "Darren Korb",
          "type" : "artist",
          "uri" : "spotify:artist:0ZMWrgLff357yxLyEU77a1"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5x5ymm4vyLlpwWOXmOJ7zg"
          },
          "href" : "https://api.spotify.com/v1/artists/5x5ymm4vyLlpwWOXmOJ7zg",
          "id" : "5x5ymm4vyLlpwWOXmOJ7zg",
          "name" : "Ashley Barrett",
          "type" : "artist",
          "uri" : "spotify:artist:5x5ymm4vyLlpwWOXmOJ7zg"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 149897,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "QM9HB1400017"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/5WZh4sv62fSXNgmhb1aU0C"
        },
        "href" : "https://api.spotify.com/v1/tracks/5WZh4sv62fSXNgmhb1aU0C",
        "id" : "5WZh4sv62fSXNgmhb1aU0C",
        "is_playable" : true,
        "name" : "We All Become (feat. Ashley Barrett)",
        "popularity" : 51,
        "preview_url" : "https://p.scdn.co/mp3-preview/6bd126e3a288d7e6f7b7b80a087015045848b11f",
        "track_number" : 17,
        "type" : "track",
        "uri" : "spotify:track:5WZh4sv62fSXNgmhb1aU0C"
      }, {
        "album" : {
          "album_type" : "album",
          "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/3B0PgLmgaW0gJth55ApWbw"
          },
          "href" : "https://api.spotify.com/v1/albums/3B0PgLmgaW0gJth55ApWbw",
          "id" : "3B0PgLmgaW0gJth55ApWbw",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/6776280c479cbd4a09c363e1208e4aa40cb79e93",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/fa8a3b68578c65fff17f59cc5e5058b4e2fc48b2",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/9c1b35f0b08f382fada5e32ba94c31cc48646ee5",
            "width" : 64
          } ],
          "name" : "Transistor Original Soundtrack",
          "type" : "album",
          "uri" : "spotify:album:3B0PgLmgaW0gJth55ApWbw"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0ZMWrgLff357yxLyEU77a1"
          },
          "href" : "https://api.spotify.com/v1/artists/0ZMWrgLff357yxLyEU77a1",
          "id" : "0ZMWrgLff357yxLyEU77a1",
          "name" : "Darren Korb",
          "type" : "artist",
          "uri" : "spotify:artist:0ZMWrgLff357yxLyEU77a1"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5x5ymm4vyLlpwWOXmOJ7zg"
          },
          "href" : "https://api.spotify.com/v1/artists/5x5ymm4vyLlpwWOXmOJ7zg",
          "id" : "5x5ymm4vyLlpwWOXmOJ7zg",
          "name" : "Ashley Barrett",
          "type" : "artist",
          "uri" : "spotify:artist:5x5ymm4vyLlpwWOXmOJ7zg"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 194152,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "QM9HB1400004"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/4Tm7vJMSIcb8FcrLsLnirt"
        },
        "href" : "https://api.spotify.com/v1/tracks/4Tm7vJMSIcb8FcrLsLnirt",
        "id" : "4Tm7vJMSIcb8FcrLsLnirt",
        "is_playable" : true,
        "name" : "The Spine (feat. Ashley Barrett)",
        "popularity" : 50,
        "preview_url" : "https://p.scdn.co/mp3-preview/b7888badd4b4c5d9d1b71bed16e5f814a1ae5bd0",
        "track_number" : 4,
        "type" : "track",
        "uri" : "spotify:track:4Tm7vJMSIcb8FcrLsLnirt"
      }, {
        "album" : {
          "album_type" : "album",
          "available_markets" : [ "AD", "AR", "AT", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/66MztQRqLYgND6LTeIpRFx"
          },
          "href" : "https://api.spotify.com/v1/albums/66MztQRqLYgND6LTeIpRFx",
          "id" : "66MztQRqLYgND6LTeIpRFx",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/6c6c0310c99143b4382bd93fa7449d085488b41a",
            "width" : 617
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/360f462ae657e0c20073bc5ab1fbf8bdba83497a",
            "width" : 289
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/44ac4e2e284d2339887d10cdedd950f115dc80e8",
            "width" : 62
          } ],
          "name" : "Transistor",
          "type" : "album",
          "uri" : "spotify:album:66MztQRqLYgND6LTeIpRFx"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/41Q0HrwWBtuUkJc7C1Rp6K"
          },
          "href" : "https://api.spotify.com/v1/artists/41Q0HrwWBtuUkJc7C1Rp6K",
          "id" : "41Q0HrwWBtuUkJc7C1Rp6K",
          "name" : "311",
          "type" : "artist",
          "uri" : "spotify:artist:41Q0HrwWBtuUkJc7C1Rp6K"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 238400,
        "explicit" : true,
        "external_ids" : {
          "isrc" : "USCA19786867"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/0LtsuNRz3IMRrHCYO9fKRk"
        },
        "href" : "https://api.spotify.com/v1/tracks/0LtsuNRz3IMRrHCYO9fKRk",
        "id" : "0LtsuNRz3IMRrHCYO9fKRk",
        "is_playable" : true,
        "name" : "Beautiful Disaster",
        "popularity" : 57,
        "preview_url" : "https://p.scdn.co/mp3-preview/af5a881384a73c20d0edad4662552a1a214cf7fa",
        "track_number" : 4,
        "type" : "track",
        "uri" : "spotify:track:0LtsuNRz3IMRrHCYO9fKRk"
      }, {
        "album" : {
          "album_type" : "album",
          "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/3B0PgLmgaW0gJth55ApWbw"
          },
          "href" : "https://api.spotify.com/v1/albums/3B0PgLmgaW0gJth55ApWbw",
          "id" : "3B0PgLmgaW0gJth55ApWbw",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/6776280c479cbd4a09c363e1208e4aa40cb79e93",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/fa8a3b68578c65fff17f59cc5e5058b4e2fc48b2",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/9c1b35f0b08f382fada5e32ba94c31cc48646ee5",
            "width" : 64
          } ],
          "name" : "Transistor Original Soundtrack",
          "type" : "album",
          "uri" : "spotify:album:3B0PgLmgaW0gJth55ApWbw"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0ZMWrgLff357yxLyEU77a1"
          },
          "href" : "https://api.spotify.com/v1/artists/0ZMWrgLff357yxLyEU77a1",
          "id" : "0ZMWrgLff357yxLyEU77a1",
          "name" : "Darren Korb",
          "type" : "artist",
          "uri" : "spotify:artist:0ZMWrgLff357yxLyEU77a1"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5x5ymm4vyLlpwWOXmOJ7zg"
          },
          "href" : "https://api.spotify.com/v1/artists/5x5ymm4vyLlpwWOXmOJ7zg",
          "id" : "5x5ymm4vyLlpwWOXmOJ7zg",
          "name" : "Ashley Barrett",
          "type" : "artist",
          "uri" : "spotify:artist:5x5ymm4vyLlpwWOXmOJ7zg"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 206463,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "QM9HB1400010"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/66H8Pon5ZiRE4p8W4OOf6I"
        },
        "href" : "https://api.spotify.com/v1/tracks/66H8Pon5ZiRE4p8W4OOf6I",
        "id" : "66H8Pon5ZiRE4p8W4OOf6I",
        "is_playable" : true,
        "name" : "In Circles (feat. Ashley Barrett)",
        "popularity" : 48,
        "preview_url" : "https://p.scdn.co/mp3-preview/709da56c19aa54e227c643a4b1c1c8a8cbcef325",
        "track_number" : 10,
        "type" : "track",
        "uri" : "spotify:track:66H8Pon5ZiRE4p8W4OOf6I"
      }, {
        "album" : {
          "album_type" : "album",
          "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/0jwcVOk3uHCBS2Nyj1MvQu"
          },
          "href" : "https://api.spotify.com/v1/albums/0jwcVOk3uHCBS2Nyj1MvQu",
          "id" : "0jwcVOk3uHCBS2Nyj1MvQu",
          "images" : [ {
            "height" : 600,
            "url" : "https://i.scdn.co/image/1259dc7d1be53848ece0cd46d66c7006fc960093",
            "width" : 600
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/897100383e1a4801755e6d5dccc1fb8f82d49df6",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/712f78e78d65c6097646743beedfe5058483d6c2",
            "width" : 64
          } ],
          "name" : "See You On The Other Side",
          "type" : "album",
          "uri" : "spotify:album:0jwcVOk3uHCBS2Nyj1MvQu"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3RNrq3jvMZxD9ZyoOZbQOD"
          },
          "href" : "https://api.spotify.com/v1/artists/3RNrq3jvMZxD9ZyoOZbQOD",
          "id" : "3RNrq3jvMZxD9ZyoOZbQOD",
          "name" : "Korn",
          "type" : "artist",
          "uri" : "spotify:artist:3RNrq3jvMZxD9ZyoOZbQOD"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 252066,
        "explicit" : true,
        "external_ids" : {
          "isrc" : "USVI20500580"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/4hLngRMrlj7N8MdJQkTv1c"
        },
        "href" : "https://api.spotify.com/v1/tracks/4hLngRMrlj7N8MdJQkTv1c",
        "id" : "4hLngRMrlj7N8MdJQkTv1c",
        "is_playable" : true,
        "name" : "Twisted Transistor",
        "popularity" : 49,
        "preview_url" : "https://p.scdn.co/mp3-preview/f639359728831d3bba6aeb310af5f4a2213546f5",
        "track_number" : 1,
        "type" : "track",
        "uri" : "spotify:track:4hLngRMrlj7N8MdJQkTv1c"
      }, {
        "album" : {
          "album_type" : "album",
          "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/3B0PgLmgaW0gJth55ApWbw"
          },
          "href" : "https://api.spotify.com/v1/albums/3B0PgLmgaW0gJth55ApWbw",
          "id" : "3B0PgLmgaW0gJth55ApWbw",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/6776280c479cbd4a09c363e1208e4aa40cb79e93",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/fa8a3b68578c65fff17f59cc5e5058b4e2fc48b2",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/9c1b35f0b08f382fada5e32ba94c31cc48646ee5",
            "width" : 64
          } ],
          "name" : "Transistor Original Soundtrack",
          "type" : "album",
          "uri" : "spotify:album:3B0PgLmgaW0gJth55ApWbw"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0ZMWrgLff357yxLyEU77a1"
          },
          "href" : "https://api.spotify.com/v1/artists/0ZMWrgLff357yxLyEU77a1",
          "id" : "0ZMWrgLff357yxLyEU77a1",
          "name" : "Darren Korb",
          "type" : "artist",
          "uri" : "spotify:artist:0ZMWrgLff357yxLyEU77a1"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5x5ymm4vyLlpwWOXmOJ7zg"
          },
          "href" : "https://api.spotify.com/v1/artists/5x5ymm4vyLlpwWOXmOJ7zg",
          "id" : "5x5ymm4vyLlpwWOXmOJ7zg",
          "name" : "Ashley Barrett",
          "type" : "artist",
          "uri" : "spotify:artist:5x5ymm4vyLlpwWOXmOJ7zg"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 240936,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "QM9HB1400023"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/3deUFJzGwnWTsTel4EeEeV"
        },
        "href" : "https://api.spotify.com/v1/tracks/3deUFJzGwnWTsTel4EeEeV",
        "id" : "3deUFJzGwnWTsTel4EeEeV",
        "is_playable" : true,
        "name" : "Paper Boats (feat. Ashley Barrett)",
        "popularity" : 47,
        "preview_url" : "https://p.scdn.co/mp3-preview/fe2465377fc584b9a8b88fed293092776832974d",
        "track_number" : 23,
        "type" : "track",
        "uri" : "spotify:track:3deUFJzGwnWTsTel4EeEeV"
      } ],
      "limit" : 10,
      "next" : "https://api.spotify.com/v1/search?query=transistor&offset=10&limit=10&type=track",
      "offset" : 0,
      "previous" : null,
      "total" : 1788
    }
  };
});
