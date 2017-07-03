(function (angular) {
    'use strict';
    var http = angular.module('moviecat.services.http', []);
    http.service('httpservice', ['$window', '$document', function ($window,$document) {
        // console.log($document)
        this.jsonp = function (url, data, callback) {
            // 挂载回调函数
            var cbfuncname = 'my_json_' + Math.random().toString().replace('.', '');
            $window[cbfuncname] = callback;
            // data转换为url字符串
            var querystring = url.indexOf('?') == -1 ? '?' : '&';
            for (var key in data) {
                querystring += key + '=' + data[key] + '&';
            }
            // 回调参数

            querystring += 'callback=' + cbfuncname;
            // 创建script标签
            var scriptelement = $document[0].createElement('script');
            scriptelement.src = url + querystring;
            // appen到页面
            $document[0].body.appendChild(scriptelement);
        };
        // console.log('big')
        // console.log($window);
    }]);
})(angular);