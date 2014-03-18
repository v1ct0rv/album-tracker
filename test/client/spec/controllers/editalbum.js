'use strict';

describe('Controller: EditalbumCtrl', function () {

  // load the controller's module
  beforeEach(module('albumTrackerApp'));

  var EditalbumCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditalbumCtrl = $controller('EditalbumCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
