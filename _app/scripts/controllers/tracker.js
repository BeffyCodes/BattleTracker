define(['./controllers'], function (controllersModule) {
    controllersModule.controller("TrackerCtrl", ['DataAccessService', '$mdDialog', 'campaign', 'allMonsters', function (dataAccess, $mdDialog, campaign, allMonsters) {
        var vm = this;

        // Variables

        vm.battleMap = [];
        vm.rows = 5;
        vm.columns = 5;
        vm.campaign = campaign;
        vm.monsters = allMonsters.filter(function (monster) { return monster.edition === vm.campaign.edition });
        vm.charactersOnMap = [];
        var selectedCell = null;

        // Functions

        // Public Functions

        vm.initializeMap = function (rows, columns) {
            vm.battleMap = [];
            for (var i = 0; i < columns; i++) {
                for (var j = 0; j < rows; j++) {
                    vm.battleMap.push({
                        x: j,
                        y: i,
                        selected: false,
                        occupied: false,
                        resident: {}
                    });
                }
            }
        };

        vm.cellSelected = function (cell) {
            if (cell.occupied) {
                creatureSelected(cell)
            } else if (!selectedCell) {
                addCreature(cell);
            } else {
                moveCreature(cell);
            }
        };

        vm.clearCell = function (cell, ev) {
            cell.resident.onMap = false;
            cell.resident = {};
            cell.occupied = false;
            selectedCell.selected = false;
            selectedCell = null;
            ev.stopPropagation();
        };

        // Private Functions

        function addCreature(cell) {
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

        function moveCreature(cell) {
            cell.resident = selectedCell.resident;
            cell.occupied = true;
            selectedCell.resident = {};
            selectedCell.occupied = false;
            selectedCell.selected = false;
            selectedCell = null;
        };

        function creatureSelected(cell) {
            if (selectedCell) {
                selectedCell.selected = false;
            }
            cell.selected = true;
            selectedCell = cell;
        };

        // Dialog Controllers

        function EmptyCellDialogCtrl($mdDialog, characters, monsters) {
            var dialogVm = this;

            // Variables

            dialogVm.characters = characters.filter(function(character, index) {
                return !character.onMap;
            });
            dialogVm.monsters = monsters;
            dialogVm.selectedCharacter = {};
            dialogVm.selectedMonster = {};


            // Functions

            dialogVm.dropdownChanged = function (dropdown) {
                dropdown === "Character" ? dialogVm.selectedMonster = {} : dialogVm.selectedCharacter = {};
            };

            dialogVm.save = function () {
                if (angular.equals(dialogVm.selectedCharacter, {}) && angular.equals(dialogVm.selectedMonster, {})) {
                    dialogVm.cancel();
                }
                else if (angular.equals(dialogVm.selectedCharacter, {})) {
                    dialogVm.selectedMonster.isGood = false;
                    $mdDialog.hide(dialogVm.selectedMonster, "Monster");
                } else {
                    dialogVm.selectedCharacter.onMap = true;
                    dialogVm.selectedCharacter.isGood = true;
                    $mdDialog.hide(dialogVm.selectedCharacter, "Character");
                }
            };

            dialogVm.cancel = function () {
                $mdDialog.cancel();
            };
        };
    }]);
});