'use strict';

angular.module('albumTrackerApp')
    .controller('EditalbumCtrl', function($scope, $routeParams) {
    //Mock data
    $scope.albums = [{
        id: 1,
        name: 'FIFA World Cup Brazil 2014',
        totalStickers: 750,
        stickers: 0,
        duplicated: 0
    }, {
        id: 2,
        name: 'FIFA World Cup South Africa 2010',
        totalStickers: 750,
        stickers: 400,
        duplicated: 40
    }, {
        id: 3,
        name: 'Futbol Colombiano',
        totalStickers: 525,
        stickers: 525,
        duplicated: 10,
    }, {
        id: 4,
        name: 'Futbol Peruano',
        totalStickers: 250,
        stickers: 100,
        duplicated: 10,
    }];

    $scope.album = _.findWhere($scope.albums, { id: parseInt($routeParams.albumId) });

    $scope.currentStickers = [1, 2, 3];

    $scope.albumStickers = function() {
        var current = [];
        var all = _.range(1, $scope.album.totalStickers);
        for (var i = 0; i < all.length; i++) {
            var sticker = { id: all[i], exist: false};
            if(_.indexOf($scope.currentStickers, all[i], true) >= 0) {
                sticker.exist = true;
            } 
            current.push(sticker);          
        };
        return current;
    };

    $scope.getClass = function (sticker) {
        return sticker.exist ? 'alert-success':'alert-danger'
    }
});