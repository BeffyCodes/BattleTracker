define(['./controllers'], function (controllersModule) {
    controllersModule.controller("CampaignsCtrl", ['DataAccessService', function(dataAccess) {
    	var vm = this;

    	// Variables
    	vm.allCampaigns = [];


    	// Functions
    	vm.delete = function(id) {
    		if (window.confirm("Are you sure?")) {
    			dataAccess.delete("campaigns", id).then(function (response) {
	    			for (var i = vm.allCampaigns.length - 1; i >= 0; i--) {
	    				if (vm.allCampaigns[i]._id === id) {
	    					vm.allCampaigns.splice(i, 1);
	    					break;
	    				}
	    			}
	    		},
    			function (err) {
    				console.log(err);
    			});
    		}
    	};

    	// Get all campaigns
    	dataAccess.get("campaigns").then(function(campaigns) {
    		vm.allCampaigns = campaigns;
    	}, function(err) {
    		console.log(err);
    	});
    }]);
});