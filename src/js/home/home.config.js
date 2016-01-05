;(function(){
    'use strict';

    angular
        .module('app.home', ['templates-dist'])
        .config(homeConfig);

    homeConfig.$inject = ['$stateProvider'];

    function homeConfig($stateProvider) {
        $stateProvider
            .state('root.home', {
                url: '/',
                views: {
                    'body@root': {
                        templateUrl: 'templates/home/home.tpl.html'
                    }
                }
            });
    }

})();
