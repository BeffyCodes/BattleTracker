define(['./controllers'], function (controllersModule) {
    controllersModule.controller("MonstersCtrl", ['DataAccessService', function(dataAccess) {
    	var vm = this;

    	// Variables
    	vm.allMonsters = [];


    	// Functions
    	vm.delete = function(id) {
    		if (window.confirm("Are you sure?")) {
    			dataAccess.delete("monsters", id).then(function (response) {
	    			for (var i = vm.allMonsters.length - 1; i >= 0; i--) {
	    				if (vm.allMonsters[i]._id === id) {
	    					vm.allMonsters.splice(i, 1);
	    					break;
	    				}
	    			}
	    		},
    			function (err) {
    				console.log(err);
    			});
    		}
    	};

    	// Get all monsters
    	dataAccess.get("monsters").then(function(monsters) {
    		vm.allMonsters = monsters;
    	}, function(err) {
    		console.log(err);
    	});
    }]);
});
