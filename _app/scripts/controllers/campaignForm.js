define(['./controllers'], function (controllersModule) {
    controllersModule.controller("CampaignFormCtrl", ['DataAccessService', '$state', '$stateParams', function(dataAccess, $state, $stateParams) {
    	var vm = this;

    	// Variables

        vm.id = "";
        vm.name = "";
        vm.dm = "";
        vm.edition = "5";
        vm.characters = [];
        vm.charactersToSelect = [];
        vm.charactersToRemove = [];

        vm.possibleCharacters = [
            {
                name: "Parse",
                id: 25
            },
            {
                name: "Gavino",
                id: 12
            },
            {
                name: "Shun",
                id: 47
            },
            {
                name: "Perren",
                id: 33
            }
        ];

    	// Functions

        vm.selectCharacters = function() {
            vm.charactersToSelect.forEach(function(currChar) {
                vm.characters.push(currChar);
                var index = vm.possibleCharacters.indexOf(currChar);
                vm.possibleCharacters.splice(index, 1);
            });
        };

        vm.removeCharacters = function() {
            vm.charactersToRemove.forEach(function(currChar) {
                vm.possibleCharacters.push(currChar);
                var index = vm.characters.indexOf(currChar);
                vm.characters.splice(index, 1);
            });
        };

        vm.saveCampaign = function() {
            var campaign = {
                name: vm.name,
                dm: vm.dm,
                edition: vm.edition,
                characters: vm.characters
            };

            if (vm.id) {
                campaign._id = vm.id;
                dataAccess.put("campaigns", campaign)
                .then(function(response){
                    console.log(response);
                    $state.go("campaigns");
                },
                function(err){
                    console.log(err);
                });
            } else {
                dataAccess.post("campaigns", campaign).then(
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
            vm.id = $stateParams.id
            dataAccess.get("campaigns", vm.id)
            .then(function(campaign) {
                vm.name = campaign.name;
                vm.dm = campaign.dm;
                vm.edition = campaign.edition;
                vm.characters = campaign.characters;
            },
            function(err) {
                console.log(err);
            });
        }
    }]);
});