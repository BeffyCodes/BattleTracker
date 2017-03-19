define(['./battleTracker'], function(battleTracker) {
    return battleTracker.config(function($stateProvider) {
        $stateProvider.state('home', {
            url: '',
            templateUrl: 'templates/home.html',
            controller:'MainCtrl'
        }).state('campaigns', {
            url: '/campaigns',
            templateUrl: 'templates/campaigns.html',
            controller:'CampaignsCtrl'
        }).state('characters', {
            url: '/characters',
            templateUrl: 'templates/characters.html',
            controller:'CharactersCtrl'
        });
    });
});