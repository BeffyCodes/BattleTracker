define(['./battleTracker'], function(battleTracker) {
    return battleTracker.config(function($stateProvider) {
        $stateProvider.state('home', {
            url: '',
            templateUrl: 'templates/home.html',
            controller:'MainCtrl',
            controllerAs: 'vm'
        }).state('campaigns', {
            url: '/campaigns',
            templateUrl: 'templates/campaigns.html',
            controller:'CampaignsCtrl',
            controllerAs: 'vm'
        }).state('campaignForm', {
            url: '/campaigns/:id',
            templateUrl: 'templates/campaignForm.html',
            controller:'CampaignFormCtrl',
            controllerAs: 'vm'
        }).state('characters', {
            url: '/characters',
            templateUrl: 'templates/characters.html',
            controller:'CharactersCtrl'
        });
    });
});