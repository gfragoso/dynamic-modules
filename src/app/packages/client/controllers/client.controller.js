(function() {
  'use strict';

  Client.$inject = ['$scope'];

  function Client($scope) {
    var vm = this;
    vm.message = '< == > Cliente < == >';
  };

  angular
    .module('client')
    .controller('clientController', Client)
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('client.clients', {
            url: '/clients',
            displayName: "clients",
            views: {
              'main': {
                templateUrl: 'packages/client/templates/client.template.html',
                controller: 'clientController as vm'
              }
            },
          });
      }
    ]);
})();
