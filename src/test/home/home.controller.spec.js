describe("Home page", function() {
    beforeEach(module('Home'));

    var scope, controller, API, Home;
    var $controller;

    beforeEach(inject(function($controller) {
        controller = $controller(HomeController, {})
    }));

    it('should contain Welecome message', function () {
        expect(controller.message).toEqual('Welcome');
    });
});