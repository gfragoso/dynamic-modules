(function() {

  ModuleService.$inject = ['$http', '$q', '$ocLazyLoad'];

  function ModuleService($http, $q, $ocLazyLoad) {
    return {
      getAll: getAll,
      register: register
    };

    function register() {
      getAll()
        .then(setModules);
    };

    function setModules(modules) {
      _.forEach(modules, function(module) {
        $ocLazyLoad.setModuleConfig({
          name: module.name,
          files: module.files
        });
      });
    }

    function getAll() {
      var deffered = $q.defer();

      $http.get(global.api + "/module")
        .success(deffered.resolve)
        .error(deffered.reject);

      return deffered.promise;
    };
  };

  angular
    .module('app')
    .service('moduleService', ModuleService)

})();
