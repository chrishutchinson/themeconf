'use strict';

/**
 * # wpAPIResource
 */
angular.module('wpApi')
  .factory('wpAPIResource', ['$resource', function ($resource) {
    var wpUrl = 'http://your.wordpress.site/wp-json/';

    return $resource(
      wpURL + ':param1/:param2/:param3/:param4/:param5/:param6/:param7/'
    );
  }]);
