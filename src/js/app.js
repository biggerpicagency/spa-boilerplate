'use strict';

angular
    .module('app', [
        'config',
        'ui.router',
        'Home'
    ])
    .config(appConfig)
    .run(appRun);

// Config
appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function appConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home');

    // UI router main config
    $stateProvider
        .state('root', {
            'abstract': true,
            'templateUrl': 'templates/layout.tpl.html'
        });
}

// Run
appRun.$inject = ['$rootScope', '$state', '$stateParams', '$location', 'ENV'];
function appRun($rootScope, $state, $stateParams, $location, ENV) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$location = $location;
}
