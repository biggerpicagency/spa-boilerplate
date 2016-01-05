;(function(){
    'use strict';

    angular
        .module('app.insights')
        .controller('InsightsController', InsightsController);

    InsightsController.$inject = [];

    function InsightsController(){
        //var InsightsVm = this;

        // Attaching injected dependencies to the instance
        // InsightsVm.$timeout = $timeout;

        // Attaching data fetched in router
        // InsightsVm.assetsCategories = assetsCategories;

    }

    // InsightsController.prototype.foo = function(){};

})();
