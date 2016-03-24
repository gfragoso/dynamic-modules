(function() {
  angular
    .module('order', [])
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('order', {
            url: "/order",
            abstract: true,
            templateUrl: "templates/layout.template.html"
          });

        $urlRouterProvider.otherwise("order/orders");
      }
    ]);
})();
