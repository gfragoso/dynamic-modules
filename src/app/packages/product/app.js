(function() {
  angular
    .module('product', [])
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('product', {
            url: "/product",
            abstract: true,
            templateUrl: "templates/layout.template.html"
          });

        $urlRouterProvider.otherwise("product/products");
      }
    ]);
})();
