(function() {
  'use strict';

  function MenuController($scope, $state, $location, $ocLazyLoad, moduleService) {
    var vm = this;

    vm.menu = [];
    vm.init = init;
    vm.resolveMenu = resolveMenu;

    function init() {
      moduleService.getAll()
        .then(function(modules) {
          vm.menu = modules;        
        });
    };

    function resolveMenu(module) {
      $ocLazyLoad.load(module)
        .then(function() {
          $location.path(module.defaultRoute);
        });
    };
  };

  MenuController.$inject = ['$scope', '$state', '$location', '$ocLazyLoad', 'moduleService'];

  angular
    .module('app')
    .controller('menuController', MenuController)
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('app.menu', {
            url: '/menu',
            displayName: "menu",
            views: {
              'main': {
                templateUrl: './templates/menu.template.html',
                controller: 'menuController as vm'
              }
            },
          });
      }
    ]);
})();
