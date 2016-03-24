(function() {
  'use strict';

  Order.$inject = ['$scope'];

  function Order($scope) {
    var vm = this;
    vm.message = '< == > pedido < == >';
  };

  angular
    .module('order')
    .controller('orderController', Order)
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('order.orders', {
            url: '/orders',
            displayName: "orders",
            views: {
              'main': {
                templateUrl: 'packages/order/templates/order.template.html',
                controller: 'orderController as vm'
              }
            },
          });
      }
    ]);
})();
