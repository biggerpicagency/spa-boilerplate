;(function(){
    'use strict';

    angular.module('app.animations', [])

        // Fade
        .animation('.viewAnim--fade', ['$animateCss', function($animateCss) {
            return {
                enter: function(element) {
                    return $animateCss(element, {
                        event: 'enter',
                        structural: true,
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                        duration: 0.5,
                        stagger: 0.5, // seconds of delay = leave duration
                        staggerIndex: 1 // 0-based, so leave animation is queued up as 2nd
                    });
                },
                leave: function(element) {
                    return $animateCss(element, {
                        event: 'leave',
                        structural: true,
                        from: { opacity: 1 },
                        to: { opacity: 0 },
                        duration: 0.5
                    });
                }
            };
        }])

        // Slide
        .animation('.viewAnim--slide', ['$animateCss', function($animateCss) {
            return {
                enter: function(element) {
                    return $animateCss(element, {
                        event: 'enter',
                        structural: true,
                        from: { transform: 'translateX(-100%)' },
                        to: { transform: 'translateX(0%)' },
                        duration: 1,
                        easing: 'ease'
                    });
                },
                leave: function(element) {
                    return $animateCss(element, {
                        event: 'leave',
                        structural: true,
                        from: { transform: 'translateX(0%)' },
                        to: { transform: 'translateX(100%)' },
                        duration: 1,
                        easing: 'ease'
                    });
                }
            };
        }]);

})();
