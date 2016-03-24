(function() {
  angular
    .module('sale', [])
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('sale', {
            url: "/sale",
            abstract: true,
            templateUrl: "templates/layout.template.html"
          });
          
        $urlRouterProvider.otherwise("sale/sales");
      }
    ]);
})();
