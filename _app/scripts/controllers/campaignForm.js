define(['./controllers'], function (controllersModule) {
    controllersModule.controller("CampaignFormCtrl", ['DataAccessService', '$state', '$stateParams', 'allCharacters', function(dataAccess, $state, $stateParams, allCharacters) {
    	var vm = this;

    	// Variables

        vm.campaign = {
            name: "",
            dm: "",
            edition: "5",
            characters: []
        };
        vm.charactersToSelect = [];
        vm.charactersToRemove = [];
        vm.possibleCharacters = allCharacters;


    	// Functions

        vm.selectCharacters = function() {
            vm.charactersToSelect.forEach(function(currChar) {
                vm.campaign.characters.push(currChar);
                var index = vm.possibleCharacters.indexOf(currChar);
                vm.possibleCharacters.splice(index, 1);
            });
        };

        vm.removeCharacters = function() {
            vm.charactersToRemove.forEach(function(currChar) {
                vm.possibleCharacters.push(currChar);
                var index = vm.campaign.characters.indexOf(currChar);
                vm.campaign.characters.splice(index, 1);
            });
        };

        vm.saveCampaign = function() {
            if (vm.campaign._id) {
                dataAccess.put("campaigns", vm.campaign)
                .then(function(response){
                    console.log(response);
                    $state.go("campaigns");
                },
                function(err){
                    console.log(err);
                });
            } else {
                dataAccess.post("campaigns", vm.campaign).then(
                    function(response) {
                        console.log(response);
                        $state.go("campaigns");
                    },
                    function(err) {
                        console.log(err);
                });
            }
        };

        if ($stateParams.id) {
            dataAccess.get("campaigns", $stateParams.id)
            .then(function(campaign) {
                vm.campaign = campaign;
                vm.campaign.characters.forEach(function(currChar) {
                    vm.possibleCharacters = vm.possibleCharacters.filter(function (char) {
                        return char._id != currChar._id;
                    });
                });
            },
            function(err) {
                console.log(err);
            });
        }
    }]);
});