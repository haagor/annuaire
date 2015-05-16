'use strict';

angular.module('pooIhmExemplesApp')
  .controller('RoleAddCtrl', ['$scope', '$http', '$location', '$routeParams', 'Users', 'Projects', 'Roles',
    function ($scope, $http, $location, $routeParams, Users, Projects, Roles) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    Projects.getAll(
      function (data) {
      $scope.projects = data;
    }, function (data) {
      $scope.error = data;
    });

    Users.getAll(
      function (data) {
      $scope.utils = data;
    }, function (data) {
      $scope.error = data;
    });

    if ($routeParams.userId) {
      Users.get($routeParams.userId,
        function(data) {
          $scope.theUser = data;
          $scope.isUser = true;
        },
        function(data) {
          $scope.error = data;
        });
    }
    if ($routeParams.projectId) {
      Projects.get($routeParams.projectId,
        function(data) {
          $scope.theProject = data;
          $scope.isUser = false;
        },
        function(data) {
          $scope.error = data;
        });
    }

    $scope.cancel = function() {
      if ($scope.isUser)
      {
        $location.path('/users/'+ $scope.theUser.id +'/show');
      }
      else
      {
        $location.path('/projects/'+ $scope.theProject.id +'/show');
      }
    }

    $scope.saveData = function() {
      if ($scope.isUser)
      {
        $scope.role.UserId = $scope.theUser.id;
        $scope.role.ProjectId = $scope.project.id;
      }
      else
      {
        $scope.role.UserId = $scope.user.id;
        $scope.role.ProjectId = $scope.theProject.id;
      }
      Roles.add($scope.role,
        function(data){
        $scope.result = data;
        if ($scope.isUser)
        {
          $location.path('/users/'+ $scope.role.UserId +'/show');
        }
        else
        {
          $location.path('/projects/'+ $scope.role.ProjectId +'/show');
        }
      }, function (data) {
        $scope.result = data;
      });
    };
  }]);
