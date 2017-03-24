define(['./controllers'], function (controllersModule) {
    controllersModule.controller("MonsterFormCtrl", ['DataAccessService', '$state', '$stateParams', function(dataAccess, $state, $stateParams) {
    	var vm = this;

    	// Variables

        vm.monster = {
            name: "",
            ac: "",
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

        vm.saveMonster = function() {
            if (vm.monster._id) {
                dataAccess.put("monsters", vm.monster)
                .then(function(response){
                    console.log(response);
                    $state.go("monsters");
                },
                function(err){
                    console.log(err);
                });
            } else {
                dataAccess.post("monsters", vm.monster).then(
                    function(response) {
                        console.log(response);
                        $state.go("monsters");
                    },
                    function(err) {
                        console.log(err);
                });
            }
        };

        if ($stateParams.id) {
            dataAccess.get("monsters", $stateParams.id)
            .then(function(monster) {
                vm.monster = monster;
            },
            function(err) {
                console.log(err);
            });
        }
    }]);
});
