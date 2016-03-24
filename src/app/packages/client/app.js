(function() {
  angular
    .module('client', [])
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('client', {
            url: "/client",
            abstract: true,
            templateUrl: "templates/layout.template.html"
          });

        $urlRouterProvider.otherwise("client/clients");
      }
    ]);

})();
