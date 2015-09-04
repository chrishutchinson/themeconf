'use strict';

class AppCtrl {
  constructor ($scope, $state, $stateParams, WordPress) {
    WordPress.single($stateParams.id, {
      type: 'app',
    }).then(data => {
      $scope.record = data.data;
    });
  } 
}

AppCtrl.$inject = ['$scope', '$state', '$stateParams', 'WordPressProvider'];

export default AppCtrl;
