define(['./controllers'], function (controllersModule) {
    controllersModule.controller("CampaignsCtrl", ['DataAccessService', function(dataAccess) {
    	var vm = this;

    	// Variables
    	vm.allCampaigns = [];


    	// Functions
    	vm.delete = function(index, id) {
    		dataAccess.delete("campaigns", id).then(function (response) {
    			console.log(response.message);
    			for (var i = vm.allCampaigns.length - 1; i >= 0; i--) {
    				if (vm.allCampaigns._id === id) {
    					vm.allCampaigns.splice(i, 1);
    					break;
    				}
    			}
    		},
    			function (err) {
    				console.log(err);
    			});
    	};

    	// Get all campaigns
    	dataAccess.get("campaigns").then(function(campaigns) {
    		vm.allCampaigns = campaigns;
    		vm.allCampaigns.push({name: "aaaa", _id: 1});
    		vm.allCampaigns.push({name: "zzzz", _id: 2});
    		vm.allCampaigns.push({name: "ssss", _id: 3});
    	}, function(err) {
    		console.log(err);
    	});
    }]);
});