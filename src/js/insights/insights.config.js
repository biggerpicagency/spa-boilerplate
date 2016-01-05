;(function(){
    'use strict';

    angular
        .module('app.insights', ['templates-dist'])
        .config(insightsConfig);

    insightsConfig.$inject = ['$stateProvider'];

    function insightsConfig($stateProvider) {
        $stateProvider
        .state('root.sub.insights', {
            url: '/insights',
            views: {
                'body@root': {
                    templateUrl: 'templates/insights/insights.tpl.html',
                    data: { leaveDelay: 900 }
                }
            }
        });
    }

})();
