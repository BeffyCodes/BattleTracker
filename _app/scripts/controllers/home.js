define(['./controllers'], function (controllersModule) {
    controllersModule.controller("HomeCtrl", ['allCampaigns', function (allCampaigns) {
    	var vm = this;

    	// Variables
    	vm.allCampaigns = allCampaigns;

    	// Functions


    }]);
});
