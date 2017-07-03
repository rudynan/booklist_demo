

(function (angular) {
    'use strict';
    // 正在热映模块
    angular.module('moviecat.movie_list', ['ngRoute', 'moviecat.services.http'])
        // 配置模块路由
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/:category/:page', {
                templateUrl: 'movie_list/view.html',
                controller: 'movielistcontroller'
            });
        }])
        .controller('movielistcontroller',
        ['$scope', '$route', '$routeParams', 'httpservice',
            function ($scope, $route, $routeParams, httpservice) {
                var count = 10;
                var page = parseInt($routeParams.page);
                console.log(page);
                var start = (page - 1) * count;
                // pagecount = Math.ceil(total / totlacount);


                $scope.loding = true;
                $scope.subjects = [];
                $scope.message = '';
                $scope.totlacount = 0;
                $scope.title = '';
                $scope.totalpages = 0;
                $scope.currentpage = page;

                //   var doubanapiaddress = 'http://api.douban.com/v2/movie/in_theaters'
                //   $http.jsonp(doubanapiaddress).then(function(respons){
                //   $scope.subjects = respons.data.subjects;
                //   },function(err){
                //       console.log(err);
                //       $scope.message = '获取数据错误';
                //   })
                httpservice.jsonp('http://api.douban.com/v2/movie/'+$routeParams.category, { start: start, count: count }, function (data) {
                    // console.log(data);
                    $scope.subjects = data.subjects;
                    $scope.totlacount = data.total;
                    $scope.title = data.title;
                    $scope.totalpages = Math.ceil($scope.totlacount / count);

                    $scope.loding = false;
                    $scope.$apply();
                });
                $scope.go = function (page) {
                    if (page >= 1 && page <= $scope.totalpages)
                    {$route.updateParams({ page: page });}
                        
                    

                };

            }]);
})(angular)
