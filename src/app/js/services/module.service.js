(function() {

  ModuleService.$inject = ['$http', '$q', 'moduleFactory'];

  function ModuleService($http, $q, moduleFactory) {
    return {
      getAll: getAll
    };

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
