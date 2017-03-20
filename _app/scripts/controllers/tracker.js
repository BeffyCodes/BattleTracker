define(['./controllers'], function (controllersModule) {
    controllersModule.controller("TrackerCtrl", ['DataAccessService', '$mdDialog', function(dataAccess, $mdDialog) {
    	var vm = this;

    	// Variables

        vm.battleMap = [];
        vm.rows = 0;
        vm.columns = 0;

    	// Functions

        // Public Functions

        vm.initializeMap = function (rows, columns) {
            vm.battleMap = [];
            for (var i = 0; i < rows; i++) {
                var row = [];
                for (var j = 0; j < columns; j++) {
                    row.push({
                        x: j,
                        y: i,
                        occupied: (j===2 && i===3) ? true : false,
                        resident: {}
                    });
                }
                vm.battleMap.push(row);
            }
        };

        vm.cellSelected = function (x,y) {
            vm.battleMap[y][x].occupied ? creatureSelected(vm.battleMap[y][x]) : emptyCellSelected(vm.battleMap[y][x]);
        };

        // Private Functions

        function creatureSelected (cell) {

        };

        function emptyCellSelected (cell) {
            $mdDialog.show({
                controller: DialogController,
                template: '<h1>Hi</h1>',
                locals: {
                    dataService: dataAccess
                },
                clickOutsideToClose: true,
                parent: angular.element(document.body)
            })
            .then(function(answer) {
                console.log('You said the information was "' + answer + '".');
            }, function() {
                console.log('You cancelled the dialog.');
            });
        };

        function DialogController ($mdDialog, dataService) {
        };
    }]);
});