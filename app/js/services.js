'use strict';

/* Services */




// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
  .value('version', '0.1')

  .factory('Trials', ['$http', function($http){
    return{
      get: function(callback){
          $http.jsonp('http://api.lillycoi.com/v1/trials?callback=JSON_CALLBACK').success(function(data) {
              data = data['results'];
              callback(data);
        });
      }
    };
  }]);
    


