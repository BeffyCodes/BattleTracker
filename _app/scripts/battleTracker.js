define(['angular', 'uiRouter', 'ngMaterial', 'controllers/index', 'services/index'], function (angular) {
    return angular.module('battleTracker', ['battleTracker.controllers', 'battleTracker.services', 'ui.router', 'ngMaterial']);
});