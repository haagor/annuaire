'use strict';

/**
 * @ngdoc overview
 * @name pooIhmExemplesApp
 * @description
 * # pooIhmExemplesApp
 *
 * Main module of the application.
 */
angular
  .module('pooIhmExemplesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/users', {
        templateUrl: 'views/Users/list.html',
        controller: 'UserCtrl'
      })
      .when('/users/:userId/show', {
        templateUrl: 'views/Users/show.html',
        controller: 'UserShowCtrl'
      })
      .when('/users/add', {
        templateUrl: 'views/Users/edit.html',
        controller: 'UserAddCtrl'
      })
      .when('/users/:userId/edit', {
        templateUrl: 'views/Users/edit.html',
        controller: 'UserEditCtrl'
      })
      .when('/users/:userId/addrole', {
        templateUrl: 'views/Role/add.html',
        controller: 'RoleAddCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/Projects/list.html',
        controller: 'ProjectsCtrl'
      })
      .when('/projects/:projectId/show', {
        templateUrl: 'views/Projects/show.html',
        controller: 'ProjectsShowCtrl'
      })
      .when('/projects/add', {
        templateUrl: 'views/Projects/edit.html',
        controller: 'ProjectsAddCtrl'
      })
      .when('/projects/:projectId/edit', {
        templateUrl: 'views/Projects/edit.html',
        controller: 'ProjectsEditCtrl'
      })
      .when('/projects/:projectId/addrole', {
        templateUrl: 'views/Role/add.html',
        controller: 'RoleAddCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
