;(function(){
    'use strict';

    angular
        .module('app.services', ['templates-dist'])
        .config(servicesConfig);

    servicesConfig.$inject = ['$stateProvider'];

    function servicesConfig($stateProvider) {
        $stateProvider
            .state('root.sub.services', {
                url: '/services',
                views: {
                    'body@root': {
                        templateUrl: 'templates/services/services.tpl.html',
                        data: { leaveDelay: 1300 }
                    }
                }
            })
                .state('root.sub.services.strategy', {
                    url: '/strategy',
                    views: {
                        'body@root': {
                            templateUrl: 'templates/services/strategy.tpl.html',
                            data: { leaveDelay: 1500 }
                        }
                    }
                })
                    .state('root.sub.services.strategy.analysis', {
                        url: '/web-analysis',
                        views: {
                            'body@root': {
                                templateUrl: 'templates/services/strategy_analysis.tpl.html'
                            }
                        }
                    })
            .state('root.sub.services.creative', {
                url: '/creative',
                views: {
                    'body@root': {
                        templateUrl: 'templates/services/creative.tpl.html'
                    }
                }
            })
            ;

    }

})();
