'use strict';

angular.module('albumTrackerApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      //Mock data
      $scope.albums = [
        {
            id: 1,
            name:'FIFA World Cup Brazil 2014',
            totalStickers: 750,
            stickers: 0,
            duplicated: 0
        },
        {
            id: 2,
            name:'FIFA World Cup South Africa 2010',
            totalStickers: 750,
            stickers: 400,
            duplicated: 40
        },
        {
            id: 3,
            name:'Futbol Colombiano',
            totalStickers: 525,
            stickers: 525,
            duplicated: 10,
        },
        {
            id: 4,
            name:'Futbol Peruano',
            totalStickers: 250,
            stickers: 100,
            duplicated: 10,
        }
      ];
    });

    $scope.getPercentage = function(album) {
        return (album.stickers * 100) / album.totalStickers;
    };
  });
