define(['./controllers'], function (controllersModule) {
    controllersModule.controller("TrackerCtrl", ['DataAccessService', '$mdDialog', 'campaign', 'allMonsters', function(dataAccess, $mdDialog, campaign, allMonsters) {
    	var vm = this;

    	// Variables

        vm.battleMap = [];
        vm.rows = 5;
        vm.columns = 5;
        vm.campaign = campaign;
        vm.monsters = allMonsters.filter(function (monster) { return monster.edition === vm.campaign.edition });
        vm.charactersOnMap = [];

    	// Functions

        // Public Functions

        vm.initializeMap = function (rows, columns) {
            vm.battleMap = [];
            for (var i = 0; i < columns; i++) {
                for (var j = 0; j < rows; j++) {
                    vm.battleMap.push({
                        x: j,
                        y: i,
                        occupied: false,
                        resident: {}
                    });
                }
            }
        };

        vm.cellSelected = function (cell) {
            cell.occupied ? creatureSelected(cell) : emptyCellSelected(cell);
            
        };

        // Private Functions

        function creatureSelected (cell) {
            console.log(cell.resident);
        };

        function emptyCellSelected (cell) {
            $mdDialog.show({
                controller: EmptyCellDialogCtrl,
                controllerAs: 'dialogVm',
                templateUrl: 'templates/dialogs/dialog.emptyCell.html',
                locals: {
                    characters: vm.campaign.characters,
                    monsters: vm.monsters
                },
                clickOutsideToClose: true,
                parent: angular.element(document.body)
            })
            .then(function (selectedCreature) {
                cell.occupied = true;
                cell.resident = selectedCreature;
            }, function () {
                console.log('You cancelled the dialog.');
            });
        };

        // Dialog Controllers

        function EmptyCellDialogCtrl ($mdDialog, characters, monsters) {
            var dialogVm = this;

            // Variables

            dialogVm.characters = characters;
            dialogVm.monsters = monsters;
            dialogVm.selectedCharacter = {};
            dialogVm.selectedMonster = {};


            // Functions

            dialogVm.dropdownChanged = function (dropdown) {
                dropdown === "Character" ? dialogVm.selectedMonster = {} : dialogVm.selectedCharacter = {};
            };

            dialogVm.filterCharacters = function (character) {
                return !character.onMap;
            }

            dialogVm.save = function () {
                if (angular.equals(dialogVm.selectedCharacter, {}) && angular.equals(dialogVm.selectedMonster, {})) {
                    dialogVm.cancel();
                }
                else if (angular.equals(dialogVm.selectedCharacter, {})) {
                    $mdDialog.hide(dialogVm.selectedMonster, "Monster");
                } else {
                    console.log(dialogVm.selectedCharacter);
                    dialogVm.selectedCharacter.onMap = true;
                    $mdDialog.hide(dialogVm.selectedCharacter, "Character");
                }
            };

            dialogVm.cancel = function () {
                $mdDialog.cancel();
            };
        };
    }]);
});