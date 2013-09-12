(function () {
  'use strict';

  var controller = function($scope, $http) {
    $scope.playlists = [{
      name: 'Popular',
      url: '/fixtures/popular.json'
    },
    {
      name: 'JohnyTex',
      url: '/fixtures/johnytex.json'
    }];

    $scope.setPlaylist = function(playlist) {
      $scope.selectedPlaylist = playlist;
    };

    $scope.$watch('selectedPlaylist', function(playlist) {
      playlist && fetchSongs(playlist);
    });

    function fetchSongs(playlist) {
      $http.get(playlist.url)
        .then(function(response) {
          delete response.data.version;
          $scope.songs = response.data
        });
    }
  };

  angular.module('ngE2eApp')
    .controller('MainCtrl', ['$scope', '$http', controller]);
})();
