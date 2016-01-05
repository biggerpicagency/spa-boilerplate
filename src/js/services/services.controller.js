;(function(){
    'use strict';

    angular
        .module('app.services')
        .controller('ServicesController', ServicesController);

    ServicesController.$inject = [];

    function ServicesController(){
        //var ServicesVm = this;

        // Attaching injected dependencies to the instance
        //ServicesVm.$timeout = $timeout;

        // Attaching data fetched in router
        //ServicesVm.assetsCategories = assetsCategories;

    }

    // ServicesController.prototype.foo = function(){};

})();
