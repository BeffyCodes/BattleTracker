define(['angular', 'controllers/main'], function (angular, MainCtrl) {
    angular.module('battleTracker', [])
    .controller("MainCtrl", MainCtrl);
});