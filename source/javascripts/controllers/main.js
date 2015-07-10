'use strict';

angular.module('sif')
.controller("mainCtrl", function($scope, $state, twitterUser) {

  $scope.goSearch = function() {
    $state.go("search", {query: $scope.words});
    return false;
  };

});
