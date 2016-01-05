;(function(){
    'use strict';

    angular
        .module('app.work', ['templates-dist'])
        .config(workConfig);

    workConfig.$inject = ['$stateProvider'];

    function workConfig($stateProvider) {
        $stateProvider
        .state('root.sub.work', {
            url: '/work',
            views: {
                'body@root': {
                    templateUrl: 'templates/work/work.tpl.html'
                }
            }
        });
    }

})();
