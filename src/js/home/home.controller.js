;(function(){
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    function HomeController(){
        //var HomeVm = this;

        // Attaching injected dependencies to the instance
        // HomeVm.$timeout = $timeout;

        // Attaching data fetched in router
        // HomeVm.assetsCategories = assetsCategories;

    }

    // HomeController.prototype.foo = function(){};

})();
