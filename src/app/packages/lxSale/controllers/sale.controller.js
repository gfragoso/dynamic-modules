(function() {
  'use strict';

  Sale.$inject = ['$scope'];

  function Sale($scope) {
    var vm = this;
    vm.message = '< == > venda < == >';
  };

  angular
    .module('sale')
    .controller('saleController', Sale)
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('sale.sales', {
            url: '/sales',
            displayName: "sales",
            views: {
              'main': {
                templateUrl: 'packages/lxSale/templates/sale.template.html',
                controller: 'saleController as vm'
              }
            },
          });
      }
    ]);
})();
