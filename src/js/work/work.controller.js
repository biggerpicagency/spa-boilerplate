;(function(){
    'use strict';

    angular
        .module('app.work')
        .controller('WorkController', WorkController);

    WorkController.$inject = [];

    function WorkController(){
        //var WorkVm = this;

        // Attaching injected dependencies to the instance
        // WorkVm.$timeout = $timeout;

        // Attaching data fetched in router
        // WorkVm.assetsCategories = assetsCategories;

    }

    // WorkController.prototype.foo = function(){};

})();
