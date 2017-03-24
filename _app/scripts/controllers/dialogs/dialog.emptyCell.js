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
                if (dialogVm.selectedCharacter.edition == 4) {
                    dialogVm.selectedCharacter.bloodiedValue = Math.floor(dialogVm.selectedCharacter.hp / 2);
                }
                dialogVm.selectedCharacter.majorAction = true;
                dialogVm.selectedCharacter.minorAction = true;
                dialogVm.selectedCharacter.moveAction = true;
                $mdDialog.hide(dialogVm.selectedCharacter, "Character");
            }
        };

        dialogVm.cancel = function () {
            $mdDialog.cancel();
        };
    });
});