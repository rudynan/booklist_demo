

(function (angular) {
  'use strict';
  // 正在热映模块
  angular.module('moviecat.coming_soon', ['ngRoute'])
    // 配置模块路由
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/coming_soon', {
        templateUrl: 'coming_soon/view.html',
        controller: 'somingsooncontroller'
      });
    }])

    .controller('somingsooncontroller', ['$scope', function ($scope) {

    }]);
})(angular)
