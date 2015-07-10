'use strict';

angular.module('sif')
.filter('friendsFilter', function() {
  return function(users, showFriends) {
    if (showFriends) {
      return users;
    }

    var filteredUsers = {};
    angular.forEach(users, function(userData, screenName) {
      if (!userData.following) {
        filteredUsers[screenName] = userData;
      }
    });
    return filteredUsers;
  };
});
