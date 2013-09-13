'use strict';

var App = angular.module('ngE2eApp', ['ngMockE2E']);

// FIXME: This is duplicated from app.js!
App.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

App.run(function($httpBackend) {
  $httpBackend.whenGET(/views\//).passThrough();
  $httpBackend.whenGET('/fixtures/popular.json')
    .respond({"version":"foo", "0":{"artist":"FOO BAR", "title":"FROBNIZ"}});
  $httpBackend.whenGET('/fixtures/johnytex.json')
    .respond({"version":"bar", "0":{"artist":"BAR FOO", "title":"QUUX"}});
});
