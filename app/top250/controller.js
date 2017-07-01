

(function (angular) {
  'use strict';
  // 正在热映模块
  angular.module('moviecat.top250', ['ngRoute'])
    // 配置模块路由
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/top250', {
        templateUrl: 'top250/view.html',
        controller: 'top250controller'
      });
    }])

    .controller('top250controller', ['$scope', function ($scope) {

    }]);
})(angular)
