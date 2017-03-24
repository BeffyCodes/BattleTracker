define(['controllers/controllers'], function (controllersModule) {
    controllersModule.controller("EmptyCellDialogCtrl", function ($mdDialog, characters, monsters) {
        var dialogVm = this;

        // Variables

        dialogVm.characters = characters.filter(function (character, index) {
            return !character.onMap;
        });
        dialogVm.monsters = monsters;
        dialogVm.selectedCharacter = {};
        dialogVm.selectedMonster = {};


        // Functions

        // Public Funtions

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
                prepCharacter(dialogVm.selectedCharacter);
                $mdDialog.hide(dialogVm.selectedCharacter, "Character");
            }
        };

        dialogVm.cancel = function () {
            $mdDialog.cancel();
        };

        // Private Funtions

        function prepCharacter(c) {
            c.onMap = true;
            c.isGood = true;
            if (c.edition == 4) {
                c.bloodiedValue = Math.floor(c.hp / 2);
            }
            c.majorAction = true;
            c.minorAction = true;
            c.moveAction = true;
        }
    });
});
