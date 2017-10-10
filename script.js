(function() {
    'use strict';
    angular.module("myApp", [])
        .controller('myController', function($scope) {
            var ctrl = this;
            ctrl.name = "madhu";
            console.log($scope); 
        });
})();