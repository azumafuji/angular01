'use strict';

/* Controllers */


angular.module('myApp.controllers',[])
  .controller('MyCtrl1', ['$scope', 'Trials', function($scope, Trials){
    Trials.get(function(data){
        $scope.trialslist = data;
    });

  }]);


function MyCtrl2() {
}
MyCtrl2.$inject = [];
