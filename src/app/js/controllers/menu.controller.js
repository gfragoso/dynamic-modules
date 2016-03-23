(function() {
  'use strict';

  function MenuController($scope, $state) {
    var vm = this;
    vm.message = "hello word!";
  };

  MenuController.$inject = ['$scope', '$state', '$ocLazyLoad'];

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
