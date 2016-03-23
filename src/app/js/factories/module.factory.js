(function() {
  function ModuleFactory() {

    var _modules = null;

    return {
      set: set,
      get: get,
      isLoaded: isLoaded,
      getByName: getByName
    };

    function set(modules) {
      _modules = modules;
    };

    function get() {
      return _modules;
    };

    function getByName(name) {
      return _.find(_modules, {
        name: name
      });
    };

    function isLoaded() {
      return (_modules != null);
    };

  };

  angular
  .module('app')
  .factory('moduleFactory', ModuleFactory);

})();
