(function() {
  'use strict';

  angular
    .module('app', ['ui.router', 'oc.lazyLoad'])
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/layout.template.html",
            resolve: {
              loadModule: ['$ocLazyLoad', '$state', function($ocLazyLoad, $state) {}]
            }
          });
        $urlRouterProvider.otherwise("app/menu");
      }
    ])
    .run(function(moduleService) {
      moduleService.register();
    });
})();
