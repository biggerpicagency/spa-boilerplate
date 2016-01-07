'use strict';

angular
    .module('Home')
    .controller('HomeController', HomeController);

HomeController.$inject = [];

function HomeController(){
    var home = this;
    home.message = 'Welcome';
}