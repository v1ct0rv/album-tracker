'use strict';

angular.module('albumTrackerApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
