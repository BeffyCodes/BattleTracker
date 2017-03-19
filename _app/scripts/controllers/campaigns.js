define(['./controllers'], function (controllersModule) {
    controllersModule.controller("CampaignsCtrl", ['$scope', 'DataAccessService', function($scope, dataAccess) {
    	dataAccess.get("campaigns").then(function(data){
    		console.log(data);
    	});
    }]);
});