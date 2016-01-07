'use strict';

angular
    .module('Home', ['templates-dist'])
    .config(homeConfig);

homeConfig.$inject = ['$stateProvider'];

function homeConfig($stateProvider) {
    $stateProvider
        .state('root.home', {
            url: '/home',
            views: {
                'body@root': {
                    controller: 'HomeController as home',
                    templateUrl: 'templates/home/home.tpl.html'
                }
            }
        });
}