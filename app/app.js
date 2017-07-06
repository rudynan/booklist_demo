'use strict';

// Declare app level module which depends on views, and components
angular.module('moviecat', [
  'ngRoute',
  'moviecat.movie_detail',
  'moviecat.movie_list'

]).
  config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/in_theaters/1' });
  }]).controller('navcontroller', ['$scope', '$location', function ($scope, $location) {
    $scope.$location = $location;
    $scope.$watch('$location.path()', function (now) {
      //   var path = $location.path();
      if (now.startsWith('/top250')) {
        $scope.type = 'top250'
      } else if (now.startsWith('/in_theaters')) {
        $scope.type = 'in_theaters'
      } else if (now.startsWith('/coming_soon')) {
        $scope.type = 'coming_soon'
      }
    })

  }])
  .controller('searchcontroller', ['$scope','$route', function ($scope,$route) {
    $scope.input = '';
    // 取得文本框输入内容
    $scope.search = function () {
      // console.log($scope.input);
      $route.updateParams({category:'search',q:$scope.input})
    }

    $scope.isClick = 'No!';
    $scope.myKeyup = function (e) {
      var keycode = window.event ? e.keyCode : e.which;
      if (keycode == 13) {
        $scope.search();
        $scope.myClick();
      }
    };
    $scope.myClick = function () {
      $scope.isClick = 'Yes!';
    };


  }])
