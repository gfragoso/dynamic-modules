(function() {
  'use strict';

  Product.$inject = ['$scope'];

  function Product($scope) {
    var vm = this;
    vm.message = '< == > venda < == >';
  };

  angular
    .module('product')
    .controller('productController', Product)
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('product.products', {
            url: '/products',
            displayName: "products",
            views: {
              'main': {
                templateUrl: 'packages/product/templates/product.template.html',
                controller: 'productController as vm'
              }
            },
          });
      }
    ]);
})();
