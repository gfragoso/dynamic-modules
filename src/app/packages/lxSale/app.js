(function() {
  angular
    .module('sale', [])
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('sale', {
            url: "/sale",
            abstract: true,
            templateUrl: "templates/layoutView.html",
            controller: function($scope, $state, $ocLazyLoad) {

            }
          });

        // $urlRouterProvider.otherwise("client/");
      }
    ]);

})();
