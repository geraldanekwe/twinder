'use strict';

angular.module('sif')
.controller("searchCtrl", function($scope, $state, twitterUser) {
  $scope.tags = [];
  $scope.tweet = "";

  twitterUser.search($state.params.query)
  .success(function(data) {
    console.log(data);
    $scope.data = data;
  })
  .catch(function(error) {
    console.log(error);
  });

  $scope.btnStyle = function(ratio) {
    var greenScale = Math.floor(125 * ratio);
    return { 'background-color': 'rgb(0,' + greenScale + ',0)' };
  };

  $scope.follow = function(screenName) {
    twitterUser.follow(screenName)
    .success(function(data) {
      console.log(data);
      $scope.data.users[screenName].following = true;
    })
    .catch(function(error) {
      console.log(error);
    });

    return false;
  };

  $scope.sendTweet = function() {
    twitterUser.sendTweet($scope.tweet)
    .success(function(resp) {
      $scope.tweet = "";
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  $scope.includeInTweet = function(tag) {
    $scope.tweet = $scope.tweet + " " + tag;
  };
});
