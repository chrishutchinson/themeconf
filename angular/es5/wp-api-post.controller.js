'use strict';

angular.module('wpApi')
  .controller('wpAPIPostCtrl', function ($scope, wpAPIResource, $stateParams, $state) {
  	$scope.posts = wpAPIResource.query({
    	param1: 'posts',
    	'filter[name]': $stateParams.slug,
    	type: 'post',
    });

    $scope.$watch('posts', function(value) {
      value.$promise.then(function(data){
        if(data.length === 0) {
          $state.go('home');
        }
        
        $scope.post = data[0];
      });
    });
  });
