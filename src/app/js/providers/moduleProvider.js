(function() {

  ModuleProvider.$inject = ['moduleService', '$ocLazyLoadProvider'];

  function ModuleProvider(moduleService, $ocLazyLoadProvider) {

    function register() {

    }


    return {
      get: get,
      views: views,
      $get: function() {
        return {
          get: get,
          views: views,
        }
      }
    }
  };

  angular
    .module('app')
    .provider('module', ModuleProvider);

})();
