define(['./controllers'], function (controllersModule) {
    controllersModule.controller("CharactersCtrl", ['DataAccessService', function(dataAccess) {
    	var vm = this;

    	// Variables
    	vm.allCharacters = [];


    	// Functions
    	vm.delete = function(id) {
    		if (window.confirm("Are you sure?")) {
    			dataAccess.delete("characters", id).then(function (response) {
	    			for (var i = vm.allCharacters.length - 1; i >= 0; i--) {
	    				if (vm.allCharacters[i]._id === id) {
	    					vm.allCharacters.splice(i, 1);
	    					break;
	    				}
	    			}
	    		},
    			function (err) {
    				console.log(err);
    			});
    		}
    	};

    	// Get all characters
    	dataAccess.get("characters").then(function(characters) {
    		vm.allCharacters = characters;
    	}, function(err) {
    		console.log(err);
    	});
    }]);
});