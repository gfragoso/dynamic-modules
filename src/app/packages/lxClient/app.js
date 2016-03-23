(function() {
  angular
    .module('client', [])
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('client', {
            url: "/client",
            abstract: true,
            templateUrl: "templates/layoutView.html",
            controller: function($scope, $state, $ocLazyLoad) {

            }
          });

        $urlRouterProvider.otherwise("client/");
      }
    ]);

})();
