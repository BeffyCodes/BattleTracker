define(['./battleTracker'], function(battleTracker) {
    return battleTracker.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/',
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
            controllerAs: 'vm',
            resolve: {
                allCharacters: ["DataAccessService", function(dataAccess) {
                    return dataAccess.get("characters");
                }]
            }
        }).state('characters', {
            url: '/characters',
            templateUrl: 'templates/characters.html',
            controller:'CharactersCtrl',
            controllerAs: 'vm'
        }).state('characterForm', {
            url: '/characters/:id',
            templateUrl: 'templates/characterForm.html',
            controller:'CharacterFormCtrl',
            controllerAs: 'vm'
        }).state('monsters', {
            url: '/monsters',
            templateUrl: 'templates/monsters.html',
            controller:'MonstersCtrl',
            controllerAs: 'vm'
        }).state('monsterForm', {
            url: '/monsters/:id',
            templateUrl: 'templates/monsterForm.html',
            controller:'MonsterFormCtrl',
            controllerAs: 'vm'
        }).state('tracker', {
            url: '/tracker',
            templateUrl: 'templates/tracker.html',
            controller:'TrackerCtrl',
            controllerAs: 'vm'
        });

        $urlRouterProvider.otherwise('/');
    }]);
});