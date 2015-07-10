'use strict';

angular.module('sif')
.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode({ enabled: true, requireBase: false });

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/templates/home/home.html'})
  .state('search', {
    url: '/q/:query',
    templateUrl: '/templates/home/search.html',
    controller: 'searchCtrl'
  })

});

'use strict';

angular.module('sif')
.constant('urls',{
  'apiUrl': ''
});
