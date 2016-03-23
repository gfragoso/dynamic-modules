(function() {
  'use strict';

  angular
    .module('app', [
      'ui.router',
      'oc.lazyLoad'
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
      function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
          modules: [{
            name: 'client',
            files: [
              '/packages/lxClient/app.js',
              '/packages/lxClient/controllers/client.controller.js',
            ]
          }, {
            name: 'sale',
            files: [
              '/packages/lxSale/app.js',
              '/packages/lxSale/controllers/sale.controller.js',
            ]
          }]
        });

        $stateProvider
          .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/layout.template.html",
            controller: function($scope, $state, $ocLazyLoad) {
              
            }
          });

        $urlRouterProvider.otherwise("app/menu");
      }
    ]);

})();
