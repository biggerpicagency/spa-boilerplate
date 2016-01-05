;(function(){
    'use strict';

    angular
        .module('app', [
            'config',
            'ui.router',
            'ngAnimate',
            'app.animations',
            'app.home',
            'app.services',
            'app.work',
            'app.insights'
        ])
        .config(appConfig)
        .run(appRun);

        // Config
        appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
        function appConfig($stateProvider, $urlRouterProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise("/");

            // UI router main config
            $stateProvider

                .state('root', {
                    'abstract': true,
                    'templateUrl': 'templates/layout.tpl.html'
                })

                // Common state for all subpages
                .state('root.sub', {
                    'abstract': true,
                    views: {
                        'siteLogo@root': {
                            templateUrl: 'templates/siteLogo.tpl.html'
                        },
                        'siteNav@root': {
                            templateUrl: 'templates/siteNav.tpl.html'
                        }
                    }
                });
        }

        // Run
        appRun.$inject = ['$rootScope', '$state', '$stateParams', '$location', 'ENV', '$timeout'];
        function appRun($rootScope, $state, $stateParams, $location, ENV, $timeout) {
            console.log(ENV);
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.$location = $location;

            $rootScope.$on('$stateChangeStart', delayStateChange);

            // Delays transition to 'toState'
            // by the time amount defined in the current state data param 'leaveDelay'.
            // When 'active' class is removed from 'body@root' DOM element the 'leave' CSS animations are starting.
            function delayStateChange(event, toState, toParams, fromState, fromParams){
                // Delay value is bound to a view data instead of state data
                // to prevent cascading value to child states
                var fromStateLeaveDelay = ( fromState &&
                                            fromState.views &&
                                            fromState.views['body@root'] &&
                                            fromState.views['body@root'].data &&
                                            fromState.views['body@root'].data.leaveDelay &&
                                            !isNaN(fromState.views['body@root'].data.leaveDelay)
                                          ) ? fromState.views['body@root'].data.leaveDelay : 0;
                var bodyView = angular.element(document.querySelector('.body'));

                // No delay was defined for surrent state
                // or delay had already been applied.
                if(fromStateLeaveDelay && $rootScope.bypassedState === toState.name) {
                    //console.info('Bypassing delay to ', toState.name);
                    $rootScope.bypassedState = '';
                    return;
                }

                // Delay the transition to let leave animations run
                if(fromStateLeaveDelay) {
                    event.preventDefault();
                    console.info('Waiting ', fromStateLeaveDelay, 'ms before going to ', toState.name);

                    bodyView.removeClass('active').addClass('leaving');

                    $timeout(function stateChangeStartDelay() {
                        //console.info(fromStateLeaveDelay + 'ms passed. Calling $state.go(' + toState.name + ')');
                        $rootScope.bypassedState = toState.name;
                        $state.go(toState.name);
                    }, fromStateLeaveDelay);
                }

                // Don't apply any delay
                else {
                    console.info('No leaveDelay value was found for "' + $state.current.name + '" state.');
                }

            }

            /*
            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
              console.info('$stateChangeStart from '+fromState.name+' to '+toState.name+' - fired when the transition begins. toState,toParams : \n',toState, '\n', toParams);
            });
            $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams){
              console.warn('$stateChangeError - fired when an error occurs during transition.');
              console.warn(arguments);
            });
            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
              console.info('$stateChangeSuccess to '+toState.name+' - fired once the state transition is complete.');
            });
            $rootScope.$on('$viewContentLoaded', function(event){
              console.info('$viewContentLoaded - fired after dom rendered', event);
            });
            $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){
              console.info('$stateNotFound '+unfoundState.namee+'  - fired when a state cannot be found by its name.');
              console.info(unfoundState, fromState, fromParams);
            });
            */

        }

})();
