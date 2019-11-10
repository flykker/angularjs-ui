// the module should depend on 'core' to use the stock Angular components

angular.module('plugin.demo2', []);

angular.module('materialism').config(function($routeProvider){
    $routeProvider.when('/plugins/demo2', {
        templateUrl: 'assets/tpl/demo2.html',
        controller: 'Demo2Controller',
    });
});

angular.module('plugin.demo2').controller('Demo2Controller', function($scope){

    $scope.counter = 0;

    $scope.click = function(){
        $scope.counter += 1;
        
        console.log("Plugin click");
    };
});