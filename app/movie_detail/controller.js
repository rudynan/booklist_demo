

(function (angular) {
    'use strict';
    // 正在热映模块
    angular.module('moviecat.movie_detail', ['ngRoute', 'moviecat.services.http'])
        // 配置模块路由
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/detail/:id', {
                templateUrl: 'movie_detail/view.html',
                controller: 'moviedetailcontroller'
            });
        }])
        .controller('moviedetailcontroller',
        ['$scope', '$route', '$routeParams', 'httpservice',
            function ($scope, $route, $routeParams, httpservice) {
               $scope.movie = {};
               $scope.loading = true;
               var id = $routeParams.id;
               var apiaddress = 'http://api.douban.com//v2/movie/subject/'+id;
               httpservice.jsonp(apiaddress,{},function(data){
                    $scope.movie =data;
                     $scope.loading = false;
                     $scope.$apply();
               })

            }]);
})(angular);
