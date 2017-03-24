define(['./controllers'], function (controllersModule) {
    controllersModule.controller("CharacterFormCtrl", ['DataAccessService', '$state', '$stateParams', function(dataAccess, $state, $stateParams) {
    	var vm = this;

    	// Variables

        vm.character = {
            name: "",
            playerName: "",
            race: "",
            class: "",
            hp: 0,
            edition: "5",
            attributes: {
                str: 0,
                con: 0,
                dex: 0,
                int: 0,
                wis: 0,
                cha: 0
            }
        };


    	// Functions

        vm.saveCharacter = function() {
            if (vm.character._id) {
                dataAccess.put("characters", vm.character)
                .then(function(response){
                    console.log(response);
                    $state.go("characters");
                },
                function(err){
                    console.log(err);
                });
            } else {
                dataAccess.post("characters", vm.character).then(
                    function(response) {
                        console.log(response);
                        $state.go("characters");
                    },
                    function(err) {
                        console.log(err);
                });
            }
        };

        if ($stateParams.id) {
            dataAccess.get("characters", $stateParams.id)
            .then(function(character) {
                vm.character = character;
            },
            function(err) {
                console.log(err);
            });
        }
    }]);
});
